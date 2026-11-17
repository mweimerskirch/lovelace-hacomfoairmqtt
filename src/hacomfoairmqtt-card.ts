import { css, html, LitElement, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { CARD_VERSION } from './const';
import { detectConfig } from './detect';
import { localize, setLanguage } from './localize/localize';
import { ENTITY_KEYS, type EntityKey, type HAComfoAirMQTTConfig, type HassEntity, type HomeAssistant } from './types';

console.info(
  `%c  HAComfoairMQTT Card \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

const w = window as unknown as { customCards?: unknown[] };
w.customCards = w.customCards || [];
w.customCards.push({
  type: 'hacomfoairmqtt-card',
  name: 'HAComfoairMQTT Card',
  description: localize('card.description', 'en'),
  preview: true,
  documentationURL: 'https://github.com/mweimerskirch/lovelace-hacomfoairmqtt',
});

const FAN_MODE_ICONS: Record<string, string> = {
  off: 'mdi:fan-off',
  low: 'mdi:fan-speed-1',
  medium: 'mdi:fan-speed-2',
  high: 'mdi:fan-speed-3',
  auto: 'mdi:fan-auto',
};

// 'full' = hacomfoairmqtt's non-binary filter status ('Ok' / 'Full')
const ACTIVE_STATES = ['on', 'true', 'open', 'yes', 'active', 'full'];
const UNAVAILABLE_STATES = ['unavailable', 'unknown'];

/** "on", "1", "open", 60 (%) ... → true. Works for binary sensors and for numeric sensors such as a bypass in %. */
function isActive(stateObj: HassEntity): boolean {
  const value = stateObj.state.toLowerCase();
  if (ACTIVE_STATES.includes(value)) {
    return true;
  }
  const number = Number(value);
  return !Number.isNaN(number) && number > 0;
}

type Season = 'summer' | 'winter' | 'transition';

/** binary_sensor (on = summer), hacomfoairmqtt "Summer"/"Winter", ComfoClime "heating"/"transition"/"cooling" */
function season(stateObj: HassEntity): Season | undefined {
  const value = stateObj.state.toLowerCase();
  if (['on', 'summer', 'cooling', 'true', '1'].includes(value)) {
    return 'summer';
  }
  if (['off', 'winter', 'heating', 'false', '0'].includes(value)) {
    return 'winter';
  }
  if (['transition', 'transitional'].includes(value)) {
    return 'transition';
  }
  return undefined;
}

@customElement('hacomfoairmqtt-card')
export class HAComfoAirMQTTCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private config?: HAComfoAirMQTTConfig;

  public static getStubConfig(hass?: HomeAssistant): Omit<HAComfoAirMQTTConfig, 'type'> {
    return detectConfig(hass);
  }

  /** Lets Home Assistant render the visual editor (ha-form) – no custom editor element needed. */
  public static getConfigForm() {
    const entity = (name: EntityKey, domain: string[]) => ({ name, selector: { entity: { domain } } });
    const sensor = (name: EntityKey) => entity(name, ['sensor']);
    const binary = (name: EntityKey) => entity(name, ['binary_sensor', 'sensor']);
    const section = (title: string, schema: unknown[], expanded = false) => ({
      type: 'expandable',
      name: title,
      flatten: true,
      title: localize(`editor.${title}`),
      expanded,
      schema,
    });
    return {
      schema: [
        { name: 'name', selector: { text: {} } },
        { ...entity('climateEntity', ['climate']), required: true },
        section(
          'temperatures',
          [
            sensor('outsideTempSensor'),
            sensor('supplyTempSensor'),
            sensor('returnTempSensor'),
            sensor('exhaustTempSensor'),
          ],
          true,
        ),
        section('status', [
          binary('filterStatusSensor'),
          binary('bypassValveSensor'),
          binary('summerModeSensor'),
          binary('preheatingStatusSensor'),
        ]),
        section('air', [
          sensor('supplyAirLevelSensor'),
          sensor('returnAirLevelSensor'),
          sensor('supplyAirFlowSensor'),
          sensor('exhaustAirFlowSensor'),
        ]),
        section('extra', [sensor('outsideHumiditySensor'), sensor('insideHumiditySensor'), sensor('powerSensor')]),
      ],
      computeLabel: (schema: { name: string }) => localize(`editor.${schema.name}`),
    };
  }

  public setConfig(config: HAComfoAirMQTTConfig): void {
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }
    if (!config.climateEntity) {
      throw new Error(localize('common.missing_climate'));
    }
    this.config = { ...config };
  }

  public getCardSize(): number {
    return 6;
  }

  /** Sections view: full width by default, at least half. */
  public getGridOptions() {
    return { columns: 12, min_columns: 6, rows: 'auto' };
  }

  /** Only re-render when one of the configured entities changed (hass changes on every state change in HA). */
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }
    if (changedProps.has('config')) {
      return true;
    }
    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (!oldHass || !this.hass) {
      return true;
    }
    if (oldHass.locale?.language !== this.hass.locale?.language) {
      return true;
    }
    const config = this.config;
    return ENTITY_KEYS.some((key) => {
      const entityId = config[key];
      return entityId && oldHass.states[entityId] !== this.hass!.states[entityId];
    });
  }

  private stateOf(key: EntityKey): HassEntity | undefined {
    const entityId = this.config?.[key];
    const stateObj = entityId ? this.hass?.states[entityId] : undefined;
    return stateObj && !UNAVAILABLE_STATES.includes(stateObj.state) ? stateObj : undefined;
  }

  private format(stateObj: HassEntity | undefined): string {
    if (!stateObj) {
      return '–';
    }
    if (this.hass?.formatEntityState) {
      return this.hass.formatEntityState(stateObj);
    }
    const unit = stateObj.attributes.unit_of_measurement;
    return unit ? `${stateObj.state} ${unit}` : stateObj.state;
  }

  private moreInfo(entityId: string | undefined): void {
    if (!entityId) {
      return;
    }
    this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId }, bubbles: true, composed: true }));
  }

  private setFanMode(mode: string): void {
    this.hass?.callService('climate', 'set_fan_mode', { entity_id: this.config!.climateEntity, fan_mode: mode });
  }

  /** A temperature that opens its more-info dialog when clicked. */
  private renderValue(key: EntityKey, cssClass = ''): TemplateResult {
    const entityId = this.config?.[key];
    const title = entityId ? (this.hass?.states[entityId]?.attributes.friendly_name ?? entityId) : '';
    return html`<button
      class="value ${cssClass}"
      ?disabled=${!entityId}
      title=${title}
      aria-label=${title ? `${title}: ${this.format(this.stateOf(key))}` : nothing}
      @click=${() => this.moreInfo(entityId)}
    >
      ${this.format(this.stateOf(key))}
    </button>`;
  }

  /** `tone` selects the color used while the status is active (see .tone-* in the styles). */
  private renderStatusIcon(key: EntityKey, icon: string, label: string, active: boolean, tone: string) {
    const entityId = this.config?.[key];
    if (!entityId) {
      return nothing;
    }
    const stateObj = this.stateOf(key);
    const title = stateObj ? `${label}: ${this.format(stateObj)}` : `${label}: –`;
    return html`<button
      class="status tone-${tone} ${!stateObj || !active ? 'inactive' : ''}"
      title=${title}
      aria-label=${title}
      @click=${() => this.moreInfo(entityId)}
    >
      <ha-icon .icon=${stateObj ? icon : 'mdi:help-circle-outline'}></ha-icon>
    </button>`;
  }

  /** Filter, bypass and preheating: a row of badges at the bottom of the house. */
  private renderStatusIcons(): TemplateResult {
    const filter = this.stateOf('filterStatusSensor');
    const bypass = this.stateOf('bypassValveSensor');
    const preheat = this.stateOf('preheatingStatusSensor');
    return html`<div class="statuses">
      ${this.renderStatusIcon(
        'filterStatusSensor',
        'mdi:air-filter',
        localize(filter && isActive(filter) ? 'card.filter_change' : 'card.filter_ok'),
        !!filter && isActive(filter),
        'warning',
      )}
      ${this.renderStatusIcon(
        'bypassValveSensor',
        'mdi:valve',
        localize('card.bypass'),
        !!bypass && isActive(bypass),
        'primary',
      )}
      ${this.renderStatusIcon(
        'preheatingStatusSensor',
        'mdi:radiator',
        localize('card.preheating'),
        !!preheat && isActive(preheat),
        'heat',
      )}
    </div>`;
  }

  /** The season sits in the "sky" next to the house: sun, snowflake or both. */
  private renderSeason() {
    const summer = this.stateOf('summerModeSensor');
    const currentSeason = summer ? season(summer) : undefined;
    const seasonIcon =
      currentSeason === 'summer'
        ? 'mdi:weather-sunny'
        : currentSeason === 'winter'
          ? 'mdi:snowflake'
          : 'mdi:sun-snowflake-variant';
    return html`<div class="sky">
      ${this.renderStatusIcon(
        'summerModeSensor',
        seasonIcon,
        currentSeason ? localize(`card.${currentSeason}`) : localize('card.season'),
        true,
        currentSeason ?? 'transition',
      )}
    </div>`;
  }

  /** Supply level, plus the return level if it differs. */
  private renderAirLevel() {
    const supply = this.stateOf('supplyAirLevelSensor');
    const ret = this.stateOf('returnAirLevelSensor');
    if (!supply && !ret) {
      return nothing;
    }
    const showReturn = ret && (!supply || Math.round(Number(supply.state)) !== Math.round(Number(ret.state)));
    const label = localize('card.air_level');
    return html`<button
      class="level"
      title=${label}
      aria-label=${`${label}: ${[supply, showReturn ? ret : undefined]
        .filter((s) => s)
        .map((s) => this.format(s))
        .join(' / ')}`}
      @click=${() => this.moreInfo(this.config?.supplyAirLevelSensor ?? this.config?.returnAirLevelSensor)}
    >
      <ha-icon icon="mdi:speedometer"></ha-icon>
      <span class="level-value">${supply ? this.format(supply) : this.format(ret)}</span>
      ${showReturn && supply ? html`<span class="level-return">${this.format(ret)}</span>` : nothing}
    </button>`;
  }

  /** Target temperature, shown like a thermostat display under the roof. */
  private renderTargetTemperature() {
    const climate = this.hass?.states[this.config!.climateEntity];
    const target = climate?.attributes.temperature;
    if (target === undefined || target === null) {
      return nothing;
    }
    const formatted = this.hass?.formatEntityAttributeValue
      ? this.hass.formatEntityAttributeValue(climate!, 'temperature')
      : `${target} °C`;
    const label = localize('card.target_temperature');
    return html`<button
      class="target"
      title=${label}
      aria-label=${`${label}: ${formatted}`}
      @click=${() => this.moreInfo(this.config?.climateEntity)}
    >
      <ha-icon icon="mdi:thermostat"></ha-icon><span>${formatted}</span>
    </button>`;
  }

  private renderFanButtons(climate: HassEntity): TemplateResult {
    const modes: string[] = Array.isArray(climate.attributes.fan_modes)
      ? climate.attributes.fan_modes
      : ['off', 'low', 'medium', 'high'];
    const current = climate.attributes.fan_mode;
    return html`<div class="fan-modes" role="group" aria-label=${localize('card.fan_speed')}>
      ${modes.map((mode) => {
        const label = localize(`fan_mode.${mode}`) === `fan_mode.${mode}` ? mode : localize(`fan_mode.${mode}`);
        return html`<button
          class="fan-mode"
          aria-pressed=${current === mode ? 'true' : 'false'}
          title=${label}
          aria-label=${label}
          ?disabled=${UNAVAILABLE_STATES.includes(climate.state)}
          @click=${() => this.setFanMode(mode)}
        >
          <ha-icon .icon=${FAN_MODE_ICONS[mode] ?? 'mdi:fan'}></ha-icon>
        </button>`;
      })}
    </div>`;
  }

  /** Optional row: humidity outside → inside, air flow, power. */
  private renderExtras() {
    const chips: TemplateResult[] = [];
    const chip = (keys: EntityKey[], icon: string, title: string, tone: string, separator = ' → ') => {
      const present = keys.filter((key) => this.config?.[key]);
      if (!present.length) {
        return;
      }
      const text = present.map((key) => this.format(this.stateOf(key))).join(separator);
      chips.push(html`<button
        class="chip chip-${tone}"
        title=${title}
        aria-label=${`${title}: ${text}`}
        @click=${() => this.moreInfo(this.config?.[present[0]])}
      >
        <ha-icon .icon=${icon}></ha-icon>
        <span>${text}</span>
      </button>`);
    };
    chip(['outsideHumiditySensor', 'insideHumiditySensor'], 'mdi:water-percent', localize('card.humidity'), 'cool');
    chip(
      ['supplyAirFlowSensor', 'exhaustAirFlowSensor'],
      'mdi:weather-windy',
      localize('card.air_flow'),
      'fan',
      ' / ',
    );
    chip(['powerSensor'], 'mdi:flash', localize('card.power'), 'power');
    return chips.length ? html`<div class="extras">${chips}</div>` : nothing;
  }

  protected render(): TemplateResult {
    if (!this.config || !this.hass) {
      return html``;
    }
    setLanguage(this.hass.locale?.language ?? this.hass.language);
    const climate = this.hass.states[this.config.climateEntity];
    if (!climate) {
      return html`<ha-card>
        <div class="warning-box">${localize('common.entity_not_found')}: ${this.config.climateEntity}</div>
      </ha-card>`;
    }

    return html`
      <ha-card>
        <div class="header">
          <span class="name">${this.config.name ?? ''}</span>
          <button
            class="more-info"
            title=${climate.attributes.friendly_name ?? ''}
            aria-label=${climate.attributes.friendly_name ?? this.config.climateEntity}
            @click=${() => this.moreInfo(this.config?.climateEntity)}
          >
            <ha-icon icon="mdi:dots-vertical"></ha-icon>
          </button>
        </div>
        <div class="diagram">
          <!-- 160 × 94 units = the diagram's aspect ratio, so the overlays below can use matching percentages -->
          <svg class="scene" viewBox="0 6 160 94" aria-hidden="true">
            <line class="ground" x1="6" y1="97.5" x2="154" y2="97.5"></line>
            <rect class="chimney" x="98" y="13" width="8" height="18" rx="1.5"></rect>
            <path class="house" d="M40 97 V40 L80 10 L120 40 V97 Z"></path>
            <path class="roof" d="M34 44.5 L80 10 L126 44.5"></path>
          </svg>
          ${this.renderSeason()} ${this.renderTargetTemperature()}
          <div class="band band-in">
            ${this.renderValue('outsideTempSensor', 'outside')}
            <span class="duct"><ha-icon icon="mdi:arrow-right"></ha-icon></span>
            ${this.renderValue('supplyTempSensor', 'inside')}
          </div>
          <div class="band band-out">
            ${this.renderValue('exhaustTempSensor', 'outside')}
            <span class="duct"><ha-icon icon="mdi:arrow-left"></ha-icon></span>
            ${this.renderValue('returnTempSensor', 'inside')}
          </div>
          <div class="levels">${this.renderAirLevel()}</div>
          ${this.renderStatusIcons()}
        </div>
        ${this.renderFanButtons(climate)} ${this.renderExtras()}
      </ha-card>
    `;
  }

  static styles = css`
    :host {
      /* Fresh (outside) air is blue, used (indoor) air orange – the colors HA uses for cooling and heating. */
      --cac-cool: var(--state-climate-cool-color, #2b9af9);
      --cac-warm: var(--state-climate-heat-color, #ff8100);
      --cac-fan: var(--state-fan-active-color, var(--primary-color, #03a9f4));
      --cac-sun: var(--amber-color, #ffc107);
      --cac-power: var(--state-sensor-power-color, var(--amber-color, #ffc107));
      --cac-text: var(--primary-text-color, #212121);
      --cac-muted: var(--secondary-text-color, #727272);
      --cac-surface: color-mix(in srgb, var(--cac-text) 5%, transparent);
      --cac-surface-strong: color-mix(in srgb, var(--cac-text) 9%, transparent);
      --cac-radius: var(--ha-border-radius-lg, 12px);
      /* Opaque mixes (no alpha), so overlapping SVG shapes don't produce darker seams */
      --cac-bg: var(--ha-card-background, var(--card-background-color, #fff));
      --cac-house: color-mix(in srgb, var(--cac-text) 5%, var(--cac-bg));
      --cac-wall: color-mix(in srgb, var(--cac-text) 14%, var(--cac-bg));
      --cac-roof: color-mix(in srgb, var(--cac-text) 24%, var(--cac-bg));
    }

    ha-card {
      height: 100%;
      box-sizing: border-box;
      padding: 4px 16px 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow: hidden;
    }

    button {
      font: inherit;
      color: inherit;
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }
    button:disabled {
      cursor: default;
    }
    button:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 2px;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      min-height: 44px;
      margin-right: -8px;
    }
    .name {
      font-size: var(--ha-card-header-font-size, 1.15rem);
      font-weight: 500;
      line-height: 1.3;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .more-info {
      flex: none;
      color: var(--cac-muted);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.15s;
    }
    .more-info:hover {
      background: var(--cac-surface);
    }

    /* The diagram scales with the card width (container query units), so it never overflows (issue #2). */
    .diagram {
      container-type: inline-size;
      position: relative;
      width: 100%;
      max-width: 440px;
      margin: 0 auto;
      aspect-ratio: 160 / 94;
    }
    /* cqw on the container itself would resolve against the viewport, so size its children */
    .diagram > * {
      font-size: clamp(11px, 4.1cqw, 17px);
      --mdc-icon-size: clamp(14px, 5cqw, 22px);
    }

    .scene {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: visible;
    }
    .ground {
      stroke: var(--divider-color, rgba(0, 0, 0, 0.12));
      stroke-width: 1.2;
      stroke-linecap: round;
    }
    .house {
      fill: var(--cac-house);
      stroke: var(--cac-wall);
      stroke-width: 2;
      stroke-linejoin: round;
    }
    .chimney {
      fill: var(--cac-wall);
    }
    .roof {
      fill: none;
      stroke: var(--cac-roof);
      stroke-width: 4.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* House (viewBox units): walls at x 40 / 120 (25 % / 75 %), eaves at y 40, floor at y 97 */
    .sky {
      position: absolute;
      left: 88%;
      top: 16%;
      transform: translate(-50%, -50%);
    }
    .sky .status {
      --mdc-icon-size: clamp(18px, 7cqw, 30px);
      padding: 0.35em;
    }

    .target {
      position: absolute;
      left: 50%;
      top: 27.7%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      gap: 0.2em;
      padding: 0.1em 0.35em;
      border-radius: 999px;
      font-size: clamp(12px, 5cqw, 21px);
      font-weight: 500;
      white-space: nowrap;
      letter-spacing: -0.01em;
    }
    .target ha-icon {
      color: var(--cac-muted);
      --mdc-icon-size: 1.05em;
    }

    /* Air-flow bands: centered on the left wall (x 40 = 25 %), half outside, half inside */
    .band {
      position: absolute;
      left: 1.25%;
      width: 47.5%;
      height: 13.8%;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      border-radius: 999px;
      box-sizing: border-box;
    }
    .band-in {
      top: 43.6%;
      --cac-band: var(--cac-cool);
      background: linear-gradient(
        90deg,
        color-mix(in srgb, var(--cac-cool) 22%, transparent),
        color-mix(in srgb, var(--cac-cool) 12%, transparent)
      );
    }
    .band-out {
      top: 62.8%;
      --cac-band: var(--cac-warm);
      background: linear-gradient(
        90deg,
        color-mix(in srgb, var(--cac-warm) 12%, transparent),
        color-mix(in srgb, var(--cac-warm) 22%, transparent)
      );
    }
    .duct {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 8cqw;
      height: 8cqw;
      min-width: 20px;
      min-height: 20px;
      border-radius: 50%;
      background: var(--cac-band);
      color: #fff;
      box-shadow: 0 0 0 2px var(--cac-bg);
      --mdc-icon-size: clamp(13px, 4.6cqw, 20px);
    }
    .value {
      min-width: 0;
      height: 100%;
      padding: 0 0.3em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      font-weight: 500;
      font-variant-numeric: tabular-nums;
      border-radius: 999px;
    }
    .value:not(:disabled):hover {
      background: color-mix(in srgb, var(--cac-band) 14%, transparent);
    }

    /* Air level: inside the house, right of the bands */
    .levels {
      position: absolute;
      left: 50.5%;
      width: 23%;
      top: 43.6%;
      height: 33%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .level {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.15;
      padding: 0.2em 0.3em;
      border-radius: var(--cac-radius);
      white-space: nowrap;
      max-width: 100%;
      font-variant-numeric: tabular-nums;
    }
    .level ha-icon {
      color: var(--cac-fan);
      margin-bottom: 0.1em;
    }
    .level-value {
      font-weight: 500;
    }
    .level-return {
      font-size: 0.8em;
      color: var(--cac-muted);
    }
    .level:hover,
    .target:hover {
      background: var(--cac-surface);
    }

    .statuses {
      position: absolute;
      left: 27.5%;
      width: 45%;
      top: 80.9%;
      height: 14.9%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4cqw;
    }
    .status {
      display: flex;
      padding: 0.2em;
      border-radius: 50%;
      color: var(--cac-tone);
      background: color-mix(in srgb, var(--cac-tone) 18%, transparent);
      transition:
        background-color 0.2s,
        color 0.2s;
    }
    .status.inactive {
      color: var(--cac-muted);
      background: none;
      opacity: 0.55;
    }
    .tone-warning {
      --cac-tone: var(--error-color, #db4437);
    }
    .tone-primary {
      --cac-tone: var(--primary-color, #03a9f4);
    }
    .tone-heat {
      --cac-tone: var(--cac-warm);
    }
    .tone-summer {
      --cac-tone: var(--cac-sun);
    }
    .tone-winter {
      --cac-tone: var(--cac-cool);
    }
    .tone-transition {
      --cac-tone: var(--cac-muted);
    }
    .sky .status.tone-transition {
      background: var(--cac-surface);
    }

    /* Fan speed: a segmented control like the HA tile card features */
    .fan-modes {
      display: flex;
      gap: 4px;
      padding: 4px;
      border-radius: calc(var(--cac-radius) + 4px);
      background: var(--cac-surface);
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
      box-sizing: border-box;
    }
    .fan-mode {
      flex: 1 1 0;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--cac-radius);
      color: var(--cac-muted);
      --mdc-icon-size: 22px;
      transition:
        background-color 0.2s,
        color 0.2s;
    }
    .fan-mode:not(:disabled):hover {
      background: var(--cac-surface);
      color: var(--cac-text);
    }
    .fan-mode[aria-pressed='true'],
    .fan-mode[aria-pressed='true']:hover {
      background: var(--cac-fan);
      color: var(--text-primary-color, #fff);
    }
    .fan-mode:disabled {
      opacity: 0.5;
    }

    .extras {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }
    .chip {
      display: flex;
      align-items: center;
      gap: 6px;
      height: 32px;
      padding: 0 12px 0 8px;
      box-sizing: border-box;
      border-radius: 16px;
      background: var(--cac-surface);
      font-size: 0.875rem;
      font-weight: 500;
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
      --mdc-icon-size: 18px;
    }
    .chip:hover {
      background: var(--cac-surface-strong);
    }
    .chip-cool ha-icon {
      color: var(--cac-cool);
    }
    .chip-fan ha-icon {
      color: var(--cac-fan);
    }
    .chip-power ha-icon {
      color: var(--cac-power);
    }

    .warning-box {
      padding: 16px;
      color: var(--error-color, #db4437);
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        transition: none !important;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hacomfoairmqtt-card': HAComfoAirMQTTCard;
  }
}
