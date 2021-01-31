import {PropertyValues} from "lit-element";
import {HomeAssistant} from "custom-card-helpers";

export function hasChanged(element: any, changedProps: PropertyValues): boolean {
  // Force update after any config change
  if (changedProps.has('config')) {
    return true;
  }

  const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
  if (oldHass && element.config && oldHass.states && element.hass.states) {
    const config = element.config;
    const oldState = oldHass.states;
    const newState = element.hass.states;
    return (config.climateEntity && oldState[config.climateEntity] !== newState[config.climateEntity]) ||
      (config.outsideTempSensor && oldState[config.outsideTempSensor] !== newState[config.outsideTempSensor]) ||
      (config.exhaustTempSensor && oldState[config.exhaustTempSensor] !== newState[config.exhaustTempSensor]) ||
      (config.returnTempSensor && oldState[config.returnTempSensor] !== newState[config.returnTempSensor]) ||
      (config.supplyTempSensor && oldState[config.supplyTempSensor] !== newState[config.supplyTempSensor]) ||
      (config.filterStatusSensor && oldState[config.filterStatusSensor] !== newState[config.filterStatusSensor]) ||
      (config.bypassValveSensor && oldState[config.bypassValveSensor] !== newState[config.bypassValveSensor]) ||
      (config.summerModeSensor && oldState[config.summerModeSensor] !== newState[config.summerModeSensor]) ||
      (config.returnAirLevelSensor && oldState[config.returnAirLevelSensor] !== newState[config.returnAirLevelSensor]) ||
      (config.supplyAirLevelSensor && oldState[config.supplyAirLevelSensor] !== newState[config.supplyAirLevelSensor]) ||
      (config.preheatingStatusSensor && oldState[config.preheatingStatusSensor] !== newState[config.preheatingStatusSensor]);
  }
  return false;
}
