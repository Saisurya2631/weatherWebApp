function getWeather() {
    const apiKey = '2572d6e3c80a1d319b60dcc8e1ba4578'; 
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Invalid city try again !!!');
        });
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');

    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    const weatherHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Weather: ${weatherDescription}</p>
    `;

    weatherContainer.innerHTML = weatherHTML;
}

function clearWeather() {
    document.getElementById('weather-container').innerHTML = '';
}
