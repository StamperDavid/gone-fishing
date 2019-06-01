import WeatherController from "./components/weather/WeatherController.js";

class App {
  constructor() {
    this.controllers = {
      // register controllers here
      weatherController: new WeatherController()
    }
  }
}

window['app'] = new App()