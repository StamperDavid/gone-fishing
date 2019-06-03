import WeatherService from "./WeatherService.js";

var _weatherService = new WeatherService()

function drawWeather() {

    let weather = _weatherService.Weather
    let template = ''
    template = weather.Template
    document.getElementById("weather").innerHTML = template
    console.log("THE WEATHER IN YOUR AREA IS:", _weatherService.Weather)
}

export default class WeatherController {

    constructor() {
        _weatherService.addSubscriber('weather', drawWeather)
        _weatherService.getWeather()
        console.log("YOUR WEATHER MAN IS PUTTING IN OVERTIME:")
    }

}