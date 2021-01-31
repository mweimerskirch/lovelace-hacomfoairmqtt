import {LovelaceCard, LovelaceCardConfig, LovelaceCardEditor} from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'hacomfoairmqtt-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

export interface HAComfoAirMQTTConfig extends LovelaceCardConfig {
  type: string;
  climateEntity: string;
  outsideTempSensor: string;
  exhaustTempSensor: string;
  returnTempSensor: string;
  supplyTempSensor: string;
  filterStatusSensor: string;
  bypassValveSensor: string;
  summerModeSensor: string;
  returnAirLevelSensor: string;
  supplyAirLevelSensor: string;
  preheatingStatusSensor: string;
}
