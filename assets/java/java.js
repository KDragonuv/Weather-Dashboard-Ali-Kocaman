//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city

var apiKey = "b37982cfc20fc5db367db6fb514be765"
var city = "London"
var cityURL = "https://api.openweathermap.org/data/2.5/forecast?q=' +city+ '&appid=' +apiKey"
fetch ('https://api.openweathermap.org/data/2.5/forecast?q=' +city+ '&appid=' +apiKey)

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data); 
        
        document.getElementById('city').textContent = data.city.name;
        
        document.getElementById('temperature').textContent = temp.tofixed(0);
        
        var kelvin = data.list[i].dt_txt;
        var temp = kelvin - 273.15
        unixValue = data.list[i].dt_txt;
        formattedDate = dayjs(unixValue);
        
        document.getElementById('description').textContent = data.list[0].weather[0].description


  });
       