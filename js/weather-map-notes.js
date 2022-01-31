//

$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${51.1657}&lon=${10.4514}&appid=${WEATHER_MAP_TOKEN}`)
    .done(function(weather) {
        console.log(weather);
        $(".container").append(`<p>${weather.main.sea_level}</p>`)
    })
