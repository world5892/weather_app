const ls = new LS();
const weatherLocation = ls.getLocationData();
const weather = new Weather(weatherLocation);
const ui = new UI();
const weatherChangeBtn = document.getElementById('w-change-btn');
const closeBtn = document.getElementById('close');

document.addEventListener('DOMContentLoaded', getWeather);
weatherChangeBtn.addEventListener('click', changeCity);
weatherChangeBtn.addEventListener('click', getWeather);

function getWeather() {
  weather.getWeather()
    .then(data => {
      if (data.message !== 'city not found') {
        ui.paint(data, ls.getLocationData());
      } else {
        alert('City not found');
      }
    })
    .catch(err => {
      console.log(err);
    });
}

function changeCity() {
  let city = document.getElementById('city');
  weather.city = city.value;
  ls.setLocationData(city.value);
  city.value = '';
}


