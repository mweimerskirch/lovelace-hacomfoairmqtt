export interface HassEntity {
  entity_id: string;
  state: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- entity attributes are arbitrary JSON
  attributes: Record<string, any>;
}

/** The parts of the Home Assistant frontend object that this card uses. */
export interface HomeAssistant {
  states: Record<string, HassEntity>;
  locale?: { language: string };
  language?: string;
  callService(domain: string, service: string, data?: Record<string, unknown>): Promise<unknown>;
  formatEntityState?(stateObj: HassEntity, state?: string): string;
  formatEntityAttributeValue?(stateObj: HassEntity, attribute: string, value?: unknown): string;
}

/**
 * Card configuration. The original keys (climateEntity ... preheatingStatusSensor) are kept unchanged so that
 * existing dashboards keep working. Everything except climateEntity is optional.
 */
export interface HAComfoAirMQTTConfig {
  type: string;
  name?: string;
  climateEntity: string;
  outsideTempSensor?: string;
  supplyTempSensor?: string;
  returnTempSensor?: string;
  exhaustTempSensor?: string;
  supplyAirLevelSensor?: string;
  returnAirLevelSensor?: string;
  filterStatusSensor?: string;
  bypassValveSensor?: string;
  summerModeSensor?: string;
  preheatingStatusSensor?: string;
  // Added in 1.0
  outsideHumiditySensor?: string;
  insideHumiditySensor?: string;
  supplyAirFlowSensor?: string;
  exhaustAirFlowSensor?: string;
  powerSensor?: string;
}

export const ENTITY_KEYS = [
  'climateEntity',
  'outsideTempSensor',
  'supplyTempSensor',
  'returnTempSensor',
  'exhaustTempSensor',
  'supplyAirLevelSensor',
  'returnAirLevelSensor',
  'filterStatusSensor',
  'bypassValveSensor',
  'summerModeSensor',
  'preheatingStatusSensor',
  'outsideHumiditySensor',
  'insideHumiditySensor',
  'supplyAirFlowSensor',
  'exhaustAirFlowSensor',
  'powerSensor',
] as const;

export type EntityKey = (typeof ENTITY_KEYS)[number];
