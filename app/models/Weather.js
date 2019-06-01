export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.city = data.city
  }
}