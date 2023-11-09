
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
       