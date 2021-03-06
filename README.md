# Home Assistant Lovelace Card for the "hacomfoairmqtt" service

This Lovelace card relies on the [hacomfoairmqtt](https://github.com/adorobis/hacomfoairmqtt) service for the ComfoAir 350 and 550 devices.
The card uses the data that the service provides over MQTT autodiscovery.

So, before you continue, install that service first.

Here's what it looks like:

![Image](https://raw.githubusercontent.com/mweimerskirch/lovelace-hacomfoairmqtt/master/resources/card-preview.png)

## Installation

* Copy the file dist/hacomfoairmqtt-card to config/www/lovelace-hacomfoairmqtt/
* Go to Configuration->Dashboards->Resources and add "/local/lovelace-hacomfoairmqtt/hacomfoairmqtt-card.js" with type "JavaScript Module"
* Go back to a dashboard and add the "Custom: HAComfoairMQTT Card" card

Default configuration:

```yaml
type: 'custom:hacomfoairmqtt-card'
climateEntity: climate.ca350_climate
outsideTempSensor: sensor.ca350_outsidetemp
exhaustTempSensor: sensor.ca350_exhausttemp
returnTempSensor: sensor.ca350_returntemp
supplyTempSensor: sensor.ca350_supplytemp
filterStatusSensor: binary_sensor.ca350_filterstatus
bypassValveSensor: binary_sensor.ca350_bypass_valve
summerModeSensor: binary_sensor.ca350_summer_mode
returnAirLevelSensor: sensor.ca350_return_air_level
supplyAirLevelSensor: sensor.ca350_supply_air_level
preheatingStatusSensor: binary_sensor.ca350_preheatingstatus
```

## Contribute

If you want to contribute to the development of this module, install yarn, then run `yarn install` to install dependencies and `yarn build` to regenerate the JS file in the dist directory.
