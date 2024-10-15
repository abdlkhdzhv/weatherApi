const input = document.querySelector('#search');
const btn = document.querySelector('button')
const content = document.querySelector('#content')

async function getWeather(){
    const weatherInCity = await fetch(`https://api.weatherapi.com/v1/current.json?key=d8a558a6deec42f8a70134708241410&q=${input.value}`,
        {mode: 'cors'}
    );
    const weatherInJson = await weatherInCity.json();
    console.log(weatherInJson)

    const div = document.createElement('div');
    const nameCity = document.createElement('h3');
    const region = document.createElement('h3')
    const weatherCityOfC = document.createElement('h5');
    const weatherCityOfF = document.createElement('h5');
    const localTime = document.createElement('h5');

    nameCity.textContent = weatherInJson.location.name
    weatherCityOfC.textContent = `°C ${weatherInJson.current.temp_c}`
    weatherCityOfF.textContent = `℉ ${weatherInJson.current.temp_f}`
    localTime.textContent = `Дата: ${weatherInJson.location.localtime}`
    region.textContent = weatherInJson.location.region

    div.classList.add('cardWeatherCity');
    content.append(div)
    div.append(nameCity, weatherCityOfC, weatherCityOfF, localTime, region)
}



btn.addEventListener('click', () => {
    getWeather()
    input.value = ''
})