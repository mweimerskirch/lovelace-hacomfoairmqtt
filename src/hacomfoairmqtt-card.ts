import {
  css,
  customElement,
  html,
  internalProperty,
  LitElement,
  PropertyValues,
  TemplateResult
} from 'lit-element';

import {
  fireEvent,
  getLovelace,
  hasConfigOrEntityChanged,
  HomeAssistant,
  LovelaceCardEditor
} from 'custom-card-helpers';

import './editor';

import type {HAComfoAirMQTTConfig} from './types';
import {CARD_VERSION} from './const';
import {localize} from './localize/localize';
import {Connection, HassEntities, HassEntity, subscribeEntities} from "home-assistant-js-websocket";

console.info(
  `%c  HAComfoairMQTT Card \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'hacomfoairmqtt-card',
  name: 'HAComfoairMQTT Card',
  description: 'A template custom card for you to create something awesome',
});

@customElement('hacomfoairmqtt-card')
export class HAComfoAirMQTTCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('hacomfoairmqtt-card-editor');
  }

  public static getStubConfig(): object {
    return {
      climateEntity: 'climate.ca350_climate',
      outsideTempSensor: 'sensor.ca350_outsidetemp',
      exhaustTempSensor: 'sensor.ca350_exhausttemp',
      returnTempSensor: 'sensor.ca350_returntemp',
      supplyTempSensor: 'sensor.ca350_supplytemp',
      filterStatusSensor: 'binary_sensor.ca350_filterstatus',
      bypassValveSensor: 'binary_sensor.ca350_bypass_valve',
      summerModeSensor: 'binary_sensor.ca350_summer_mode',
      fanSpeedSupplySensor: 'sensor.ca350_fan_speed_supply',
      fanSpeedExhaustSensor: 'sensor.ca350_fan_speed_exhaust',
      returnAirLevelSensor: 'sensor.ca350_return_air_level',
      supplyAirLevelSensor: 'sensor.ca350_supply_air_level',
      preheatingStatusSensor: 'binary_sensor.ca350_preheatingstatus',
    }
  }

  // TODO Add any properities that should cause your element to re-render here
  // https://lit-element.polymer-project.org/guide/properties
  public hass!: HomeAssistant;
  @internalProperty() private config!: HAComfoAirMQTTConfig;

  @internalProperty()
  private _climateEntity?: HassEntity;

  private _unsubscribeEntitites?: any;

  connectedCallback(): void {
    console.log('connectedCallback')
    super.connectedCallback();
    this.doSubscribeEntities();
  }

  public doSubscribeEntities(): void {
    if (this.hass?.connection && !this._unsubscribeEntitites && this.isConnected) {
      console.log(this.isConnected)
      // @ts-ignore
      this._unsubscribeEntitites = subscribeEntities(this.hass.connection, (entities) =>
        this.entitiesUpdated(entities)
      );
    }
  }

  //Callback when hass-entity has changed
  private entitiesUpdated(entities: HassEntities): void {
    console.log('entitiesUpdated')
    this._climateEntity = entities[this.config.climateEntity];
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._unsubscribeEntitites) {
      this._unsubscribeEntitites();
      this._unsubscribeEntitites = undefined;
    }
  }

  // https://lit-element.polymer-project.org/guide/properties#accessors-custom
  public setConfig(config: HAComfoAirMQTTConfig): void {
    // TODO Check for required fields and that they are of the proper format
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = {
      name: 'Boilerplate',
      ...config,
    };
  }

  // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  static styles = css`
    ha-card {
      height: 100%;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      text-align: center;
      --name-font-size: 1.2rem;
      --brightness-font-size: 1.2rem;
    }

    .more-info {
      position: absolute;
      cursor: pointer;
      top: 0;
      right: 0;
      border-radius: 100%;
      color: var(--secondary-text-color);
      z-index: 1;
    }

    .content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 16px;
    }

    .content > div {
      position: relative;
    }

    .inactive {
      opacity: 0.33;
    }

    .warning {
      color: var(--error-color);
    }

    .house,
    .house-container {
      width: 260px;
      height: 200px;
    }

    .house {
      fill: none;
      stroke-width: 2px;
      stroke: var(--primary-text-color);
    }

    .house-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    .house-container .fan-speeds {
      position: absolute;
      bottom: 6px;
      width: 100%;
      display: flex;
    }

    .icons {
      position: absolute;
      top: 50px;
      left: 50%;
      margin-left: -80px;
      width: 160px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }

    .temperatures {
      border-top: 1px solid var(--primary-text-color);
      border-bottom: 1px solid var(--primary-text-color);
      background: var(--card-background-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      width: 140px;
      left: 50%;
      margin-left: -190px;
    }

    .temperatures-in {
      top: 90px;
    }

    .temperatures-out {
      top: 125px;
      flex-direction: row-reverse;
    }

    .speeds {
      position: absolute;
      width: 140px;
      left: 38%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      top: 86px;
    }

    mwc-button {
      opacity: .33;
    }

    mwc-button[active] {
      opacity: 1;
    }
  `;

  private fanToggleButtons = [
    {label: 'Off', value: 'off', icon: 'mdi:fan-off'},
    {label: 'Low', value: 'low', icon: 'mdi:fan-speed-1'},
    {label: 'Medium', value: 'medium', icon: 'mdi:fan-speed-2'},
    {label: 'High', value: 'high', icon: 'mdi:fan-speed-3'},
  ]

  protected renderFanButtons(): TemplateResult {
    return html`
      <div class="fan-speeds flex-col-row">
        ${this.fanToggleButtons.map((button) =>
          html`
            <mwc-button
              .value=${button.value}
              ?active=${this.hass.states[this.config.climateEntity].attributes.fan_mode === button.value}
              role="button"
              @click=${this._changeFanSpeed}>
              <ha-icon
                .icon=${button.icon}>
              </ha-icon>
            </mwc-button>
          `
        )}
      </div>
    `;
  }

  render(): TemplateResult {
    return html`
      <ha-card>
        <mwc-icon-button
          class="more-info"
          label="Open more info"
          @click=${this._handleMoreInfo}
          tabindex="0"
        >
          <ha-icon icon="mdi:dots-vertical"></ha-icon>
        </mwc-icon-button>

        <div class="content">
          <div>
            <ha-svg-icon
              class="house"
              viewBox="0 0 124 94"
              path="m 62,2 60,30 v 60 H 2 V 32 Z"
            ></ha-svg-icon>
            <div class="house-container">
              ${this.renderFanButtons()}
              <div class="temperatures temperatures-in">
                <div>
                  ${this.hass.states[this.config.outsideTempSensor] ? this.hass.states[this.config.outsideTempSensor].state + ' °C' : '-'}
                </div>
                <ha-icon icon="mdi:arrow-right-bold-outline"></ha-icon>
                <div>
                  ${this.hass.states[this.config.supplyTempSensor] ? this.hass.states[this.config.supplyTempSensor].state + ' °C' : '-'}
                </div>
              </div>
              <div class="temperatures temperatures-out">
                <div>
                  ${this.hass.states[this.config.returnTempSensor] ? this.hass.states[this.config.returnTempSensor].state + ' °C' : '-'}
                </div>
                <ha-icon icon="mdi:arrow-left-bold-outline"></ha-icon>
                <div>
                  ${this.hass.states[this.config.exhaustTempSensor] ? this.hass.states[this.config.exhaustTempSensor].state + ' °C' : '-'}
                </div>
              </div>
              <div class="speeds">
                <div>
                  ${this.config.climateEntity && this.hass.states[this.config.climateEntity] ? this.hass.states[this.config.climateEntity].attributes.temperature : '-'}
                  °C
                </div>
                <div>
                  <ha-icon icon="mdi:speedometer"></ha-icon>
                  ${this.hass.states[this.config.fanSpeedSupplySensor] ? parseInt(this.hass.states[this.config.fanSpeedSupplySensor].state) : '-'}
                  /
                  ${this.hass.states[this.config.fanSpeedExhaustSensor] ? parseInt(this.hass.states[this.config.fanSpeedExhaustSensor].state) : '-'}
                  rpm
                </div>
                <div>
                  <ha-icon icon="mdi:fan"></ha-icon>
                  ${this.hass.states[this.config.supplyAirLevelSensor] ? parseInt(this.hass.states[this.config.supplyAirLevelSensor].state) + '%' : '-'}
                  ${
                    // Show return speed value only if it's different from the supply speed
                    this.hass.states[this.config.returnAirLevelSensor] && parseInt(this.hass.states[this.config.supplyAirLevelSensor].state) !== parseInt(this.hass.states[this.config.returnAirLevelSensor].state) ?
                      parseInt(this.hass.states[this.config.returnAirLevelSensor].state) + '%' :
                      ''
                  }
                </div>
              </div>
            </div>
            <div class="icons">
              ${this.renderFilterIcon()}
              ${this.renderBypassIcon()}
              ${this.renderPreheatIcon()}
              ${this.renderSeasonIcon()}
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  _handleMoreInfo(): void {
    fireEvent(this, "hass-more-info", {
      entityId: this.config.climateEntity,
    });
  }

  _handleFilterIconClick(): void {
    fireEvent(this, "hass-more-info", {
      entityId: this.config.filterStatusSensor,
    });
  }

  _handleBypassIconClick(): void {
    fireEvent(this, "hass-more-info", {
      entityId: this.config.bypassValveSensor,
    });
  }

  _handlePreheatIconClick(): void {
    fireEvent(this, "hass-more-info", {
      entityId: this.config.preheatingStatusSensor,
    });
  }

  _handleSeasonIconClick(): void {
    fireEvent(this, "hass-more-info", {
      entityId: this.config.summerModeSensor,
    });
  }

  _changeFanSpeed(e): void {
    console.log("Fan Action:", e.currentTarget.value);
    const t = {entity_id: this.config.climateEntity, fan_mode: e.currentTarget.value};
    this.hass.callService("climate", "set_fan_mode", t)
  }

  renderFilterIcon(): TemplateResult {
    if (!this.hass.states[this.config.filterStatusSensor]) {
      return html`
        <ha-icon
          class="inactive"
          icon="mdi:timer-sand-empty"
        ></ha-icon>`;
    }

    const inactive = this.hass.states[this.config.filterStatusSensor] && this.hass.states[this.config.filterStatusSensor].state != 'on';
    return html`
      <ha-icon
        class=${inactive ? 'inactive' : 'warning'}
        icon="mdi:air-filter"
        @click=${this._handleFilterIconClick}
      ></ha-icon>`;
  }

  renderBypassIcon(): TemplateResult {
    if (!this.hass.states[this.config.bypassValveSensor]) {
      return html`
        <ha-icon
          class="inactive"
          icon="mdi:timer-sand-empty"
        ></ha-icon>`;
    }

    const active = this.hass.states[this.config.bypassValveSensor] && this.hass.states[this.config.bypassValveSensor].state == '1';
    return html`
      <ha-icon
        class=${active ? '' : 'inactive'}
        icon="mdi:electric-switch"
        @click=${this._handleBypassIconClick}
      ></ha-icon>`;
  }

  renderPreheatIcon(): TemplateResult {
    if (!this.hass.states[this.config.preheatingStatusSensor]) {
      return html`
        <ha-icon
          class="inactive"
          icon="mdi:timer-sand-empty"
        ></ha-icon>`;
    }

    const active = this.hass.states[this.config.preheatingStatusSensor] && this.hass.states[this.config.preheatingStatusSensor].state == '1';
    return html`
      <ha-icon
        class=${active ? '' : 'inactive'}
        icon="mdi:radiator"
        @click=${this._handlePreheatIconClick}
      ></ha-icon>`;
  }

  renderSeasonIcon(): TemplateResult {
    if (!this.hass.states[this.config.summerModeSensor]) {
      return html`
        <ha-icon
          class="inactive"
          icon="mdi:timer-sand-empty"
        ></ha-icon>`;
    }

    const winter = this.hass.states[this.config.summerModeSensor].state == 'off';
    return html`
      <ha-icon
        icon=${winter ? 'mdi:snowflake' : 'mdi:weather-sunny'}
        @click=${this._handleSeasonIconClick}
      ></ha-icon>`;
  }

  getCardSize(): number {
    return 6;
  }
}
