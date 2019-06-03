import WeatherController from "./components/weather/WeatherController.js";
import FishingController from "./components/fishing/FishingController.js";



class App {
    constructor() {
        this.controllers = {
            // register controllers here
            weatherController: new WeatherController(),
            fishingController: new FishingController(),
        }
    }
}

window['app'] = new App()