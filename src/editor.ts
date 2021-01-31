/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import {
  css,
  CSSResult,
  customElement,
  html,
  internalProperty,
  LitElement,
  property,
  TemplateResult,
} from 'lit-element';
import {fireEvent, HomeAssistant, LovelaceCardEditor} from 'custom-card-helpers';

import {HAComfoAirMQTTConfig} from './types';

@customElement('hacomfoairmqtt-card-editor')
export class HAComfoairMQTTCardEditor extends LitElement implements LovelaceCardEditor {
  @property({attribute: false}) public hass?: HomeAssistant;
  @internalProperty() private _config?: HAComfoAirMQTTConfig;
  @internalProperty() private _toggle?: boolean;
  @internalProperty() private _helpers?: any;
  private _initialized = false;

  public setConfig(config: HAComfoAirMQTTConfig): void {
    this._config = config;

    this.loadCardHelpers();
  }

  protected shouldUpdate(): boolean {
    if (!this._initialized) {
      this._initialize();
    }

    return true;
  }

  get _climateEntity(): string {
    return this._config?.climateEntity || 'climate.ca350_climate';
  }

  get _outsideTempSensor(): string {
    return this._config?.outsideTempSensor || 'sensor.ca350_outsidetemp';
  }

  get _exhaustTempSensor(): string {
    return this._config?.exhaustTempSensor || 'sensor.ca350_exhausttemp';
  }

  get _returnTempSensor(): string {
    return this._config?.returnTempSensor || 'sensor.ca350_returntemp';
  }

  get _supplyTempSensor(): string {
    return this._config?.supplyTempSensor || 'sensor.ca350_supplytemp';
  }

  get _filterStatusSensor(): string {
    return this._config?.filterStatusSensor || 'binary_sensor.ca350_filterstatus';
  }

  get _bypassValveSensor(): string {
    return this._config?.bypassValveSensor || 'binary_sensor.ca350_bypass_valve';
  }

  get _summerModeSensor(): string {
    return this._config?.summerModeSensor || 'binary_sensor.ca350_summer_mode';
  }

  get _fanSpeedSupplySensor(): string {
    return this._config?.fanSpeedSupplySensor || 'sensor.ca350_fan_speed_supply';
  }

  get _fanSpeedExhaustSensor(): string {
    return this._config?.fanSpeedExhaustSensor || 'sensor.ca350_fan_speed_exhaust';
  }

  get _returnAirLevelSensor(): string {
    return this._config?.returnAirLevelSensor || 'sensor.ca350_return_air_level';
  }

  get _supplyAirLevelSensor(): string {
    return this._config?.supplyAirLevelSensor || 'sensor.ca350_supply_air_level';
  }

  get _preheatingStatusSensor(): string {
    return this._config?.preheatingStatusSensor || 'binary_sensor.ca350_preheatingstatus';
  }

  protected render(): TemplateResult | void {
    if (!this.hass || !this._helpers) {
      return html``;
    }

    // The climate more-info has ha-switch and paper-dropdown-menu elements that are lazy loaded unless explicitly done here
    this._helpers.importMoreInfoControl('climate');

    const entities = Object.keys(this.hass.states).filter(eid => eid.substr(0, eid.indexOf('.')) === 'climate');
    const sensors = Object.keys(this.hass.states).filter(eid => eid.substr(0, eid.indexOf('.')) === 'sensor');
    const binary_sensors = Object.keys(this.hass.states).filter(eid => eid.substr(0, eid.indexOf('.')) === 'binary_sensor');

    return html`
      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 MQTT Climate Entity (required)"
          @value-changed=${this._valueChanged}
          .configValue=${'climateEntity'}
        >
          <paper-listbox slot="dropdown-content" .selected=${entities.indexOf(this._climateEntity)}>
            ${entities.map(value => {
              return html`
                <paper-item>${value}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 outside temperature sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${'outsideTempSensor'}
        >
          <paper-listbox slot="dropdown-content" .selected=${sensors.indexOf(this._outsideTempSensor)}>
            ${sensors.map(value => {
              return html`
                <paper-item>${value}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 exhaust temperature sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${'exhaustTempSensor'}
        >
          <paper-listbox slot="dropdown-content" .selected=${sensors.indexOf(this._exhaustTempSensor)}>
            ${sensors.map(value => {
              return html`
                <paper-item>${value}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 return temperature sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${'returnTempSensor'}
        >
          <paper-listbox slot="dropdown-content" .selected=${sensors.indexOf(this._returnTempSensor)}>
            ${sensors.map(value => {
              return html`
                <paper-item>${value}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 supply temperature sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${'supplyTempSensor'}
        >
          <paper-listbox slot="dropdown-content" .selected=${sensors.indexOf(this._supplyTempSensor)}>
            ${sensors.map(value => {
              return html`
                <paper-item>${value}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 filter status sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${'filterStatusSensor'}
        >
          <paper-listbox slot="dropdown-content" .selected=${binary_sensors.indexOf(this._filterStatusSensor)}>
            ${binary_sensors.map(value => {
              return html`
                <paper-item>${value}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 Bypass valve sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${'bypassValveSensor'}
        >
          <paper-listbox slot="dropdown-content" .selected=${binary_sensors.indexOf(this._bypassValveSensor)}>
            ${binary_sensors.map(value => {
              return html`
                <paper-item>${value}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 summer mode sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${'summerModeSensor'}
        >
          <paper-listbox slot="dropdown-content" .selected=${binary_sensors.indexOf(this._summerModeSensor)}>
            ${binary_sensors.map(value => {
              return html`
                <paper-item>${value}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 fan speed supply sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${'fanSpeedSupplySensor'}
        >
          <paper-listbox slot="dropdown-content" .selected=${sensors.indexOf(this._fanSpeedSupplySensor)}>
            ${sensors.map(value => {
              return html`
                <paper-item>${value}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 fan speed exhaust sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${'fanSpeedExhaustSensor'}
        >
          <paper-listbox slot="dropdown-content" .selected=${sensors.indexOf(this._fanSpeedExhaustSensor)}>
            ${sensors.map(value => {
              return html`
                <paper-item>${value}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 return air level sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${'returnAirLevelSensor'}
        >
          <paper-listbox slot="dropdown-content" .selected=${sensors.indexOf(this._returnAirLevelSensor)}>
            ${sensors.map(value => {
              return html`
                <paper-item>${value}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 supply air level sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${'supplyAirLevelSensor'}
        >
          <paper-listbox slot="dropdown-content" .selected=${sensors.indexOf(this._supplyAirLevelSensor)}>
            ${sensors.map(value => {
              return html`
                <paper-item>${value}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="values">
        <paper-dropdown-menu
          label="CA350/550 preheating status sensor (required)"
          @value-changed=${this._valueChanged}
          .configValue=${'preheatingStatusSensor'}
        >
          <paper-listbox slot="dropdown-content" .selected=${binary_sensors.indexOf(this._preheatingStatusSensor)}>
            ${binary_sensors.map(value => {
              return html`
                <paper-item>${value}</paper-item>
              `;
            })}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `;
  }

  private _initialize(): void {
    if (this.hass === undefined) return;
    if (this._config === undefined) return;
    if (this._helpers === undefined) return;
    this._initialized = true;
  }

  private async loadCardHelpers(): Promise<void> {
    this._helpers = await (window as any).loadCardHelpers();
  }

  private _valueChanged(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) {
      return;
    }
    if (target.configValue) {
      if (target.value === '') {
        delete this._config[target.configValue];
      } else {
        this._config = {
          ...this._config,
          [target.configValue]: target.checked !== undefined ? target.checked : target.value,
        };
      }
    }
    fireEvent(this, 'config-changed', {config: this._config});
  }

  static get styles(): CSSResult {
    return css`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }

      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }

      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }

      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }

      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }

      ha-formfield {
        padding-bottom: 8px;
      }
    `;
  }
}
