export default class Weather {
    constructor(data) {
        console.log('[  MADE IT TO THE MODEL ]', data);
        this.city = data.city
    }
}