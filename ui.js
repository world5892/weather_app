class UI {
  constructor() {
    this.location = document.querySelector('#w-location');
    this.description = document.querySelector('#w-desc');
    this.icon = document.querySelector('#w-icon');
    this.humidity = document.querySelector('#w-humidity');
    this.pressure = document.querySelector('#w-dewpoint');
    this.feels_like = document.querySelector('#w-feels-like');
    this.wind = document.querySelector('#w-wind');
  }

  paint(weather, city) {
    const temp = this.changeDegrees(weather.main.temp);

    this.location.textContent = city;
    this.description.textContent = weather.weather[0].description;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.feels_like.textContent = `Feels like: ${temp} \xB0C`;
    this.wind.textContent = `Wind speed: ${weather.wind.speed} km/h`;
  }

  changeDegrees(degrees) {
    return (degrees - 273.15).toFixed(2);
  }
}