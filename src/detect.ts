import type { EntityKey, HAComfoAirMQTTConfig, HomeAssistant } from './types';

/**
 * Entity id suffixes per config key, in order of preference. Covers
 * - hacomfoairmqtt with current Home Assistant entity naming (sensor.ca350_outside_temperature)
 * - hacomfoairmqtt with the old naming (sensor.ca350_outsidetemp)
 * - the ComfoClime integration (ComfoClime 24 + ComfoAirQ)
 */
const SUFFIXES: Partial<Record<EntityKey, string[]>> = {
  outsideTempSensor: ['_outside_temperature', '_outsidetemp', '_outdoor_temperature'],
  supplyTempSensor: ['_supply_temperature', '_supplytemp', '_supply_air_temperature'],
  returnTempSensor: ['_return_temperature', '_returntemp', '_extract_temperature', '_indoor_temperature'],
  exhaustTempSensor: ['_exhaust_temperature', '_exhausttemp'],
  filterStatusSensor: ['_filter_status', '_filterstatus'],
  bypassValveSensor: ['_bypass_valve', '_bypass_state'],
  summerModeSensor: ['_summer_mode', '_season'],
  preheatingStatusSensor: ['_preheating_status', '_preheatingstatus'],
  supplyAirLevelSensor: ['_supply_air_level', '_supply_fan_duty'],
  returnAirLevelSensor: ['_return_air_level', '_exhaust_fan_duty'],
  supplyAirFlowSensor: ['_supply_air_flow'],
  exhaustAirFlowSensor: ['_exhaust_air_flow'],
  outsideHumiditySensor: ['_outside_humidity', '_outdoor_humidity'],
  insideHumiditySensor: ['_return_humidity', '_extract_humidity', '_indoor_humidity'],
  powerSensor: ['_power_ventilation'],
};

/** Defaults for a standard hacomfoairmqtt installation (device name "CA350"). */
export const DEFAULT_CONFIG: Omit<HAComfoAirMQTTConfig, 'type'> = {
  climateEntity: 'climate.ca350_climate',
  outsideTempSensor: 'sensor.ca350_outside_temperature',
  supplyTempSensor: 'sensor.ca350_supply_temperature',
  returnTempSensor: 'sensor.ca350_return_temperature',
  exhaustTempSensor: 'sensor.ca350_exhaust_temperature',
  filterStatusSensor: 'binary_sensor.ca350_filter_status',
  bypassValveSensor: 'binary_sensor.ca350_bypass_valve',
  summerModeSensor: 'binary_sensor.ca350_summer_mode',
  preheatingStatusSensor: 'binary_sensor.ca350_preheating_status',
  supplyAirLevelSensor: 'sensor.ca350_supply_air_level',
  returnAirLevelSensor: 'sensor.ca350_return_air_level',
};

const RELEVANT = /ca350|ca550|comfo/;

function objectId(entityId: string): string {
  return entityId.slice(entityId.indexOf('.') + 1);
}

/** Finds the ventilation entities in hass.states. Falls back to the hacomfoairmqtt defaults. */
export function detectConfig(hass?: HomeAssistant): Omit<HAComfoAirMQTTConfig, 'type'> {
  if (!hass) {
    return { ...DEFAULT_CONFIG };
  }
  const ids = Object.keys(hass.states).filter((id) => RELEVANT.test(id));
  const climate = ids.find(
    (id) => id.startsWith('climate.') && Array.isArray(hass.states[id].attributes.fan_modes),
  );
  if (!climate) {
    return { ...DEFAULT_CONFIG };
  }

  // Prefix shared by the entities of the climate's device, e.g. "ca350" or "heizraum_comfoclime_24"
  const climatePrefix = objectId(climate).replace(/_climate$/, '');
  const config: Omit<HAComfoAirMQTTConfig, 'type'> = { climateEntity: climate };

  for (const [key, suffixes] of Object.entries(SUFFIXES) as [EntityKey, string[]][]) {
    for (const suffix of suffixes) {
      const matches = ids.filter(
        (id) => (id.startsWith('sensor.') || id.startsWith('binary_sensor.')) && id.endsWith(suffix),
      );
      if (matches.length) {
        // Prefer the climate's own device, then binary sensors (hacomfoairmqtt publishes both kinds), then the shortest id
        matches.sort(
          (a, b) =>
            Number(objectId(b).startsWith(climatePrefix)) - Number(objectId(a).startsWith(climatePrefix)) ||
            Number(b.startsWith('binary_sensor.')) - Number(a.startsWith('binary_sensor.')) ||
            // "_outdoor_temperature" must not pick "_mean_outdoor_temperature"
            a.length - b.length,
        );
        config[key] = matches[0];
        break;
      }
    }
  }
  return config;
}
