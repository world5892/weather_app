class Weather {
  constructor(city) {
    this.city = city;
    this.key = 'de886dde4a87b2cb12e870d97f0a65e6';
  }

  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);

    const data = await response.json();

    return data;
  }
}