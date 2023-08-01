document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=2eab43377af78cd8021c7631d0b4e0bf";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      //console.log(json);
        let results = "";
        results += '<h2>Current Weather in ' + json.name + "</h2>";
        for (let i=0; i < json.weather.length; i++) {
	        results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        results += '<h2>Current Temperature: ' + json.main.temp + " &deg;F</h2>"
        results += "<p>Minimum Temperature Today: " + json.main.temp_min + " &deg;F</p>"
        results += "<p>Maximum Temperature Today: " + json.main.temp_max + " &deg;F</p>"
        results += "<p>Currently Feels Like: " + json.main.feels_like + " &deg;F</p>"
        results += "<p>"
        for (let i=0; i < json.weather.length; i++) {
	        results += json.weather[i].description
	        if (i !== json.weather.length - 1)
	        results += ", "
        }
        results += "</p>";
        document.getElementById("weatherResults").innerHTML = results;
    });
    const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=2eab43377af78cd8021c7631d0b4e0bf";
    fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      //console.log(json);
        let forecast = "";
        for (let i=0; i < json.list.length; i++) {
            forecast += "<table> <td>"
	        forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
	        forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
	        forecast += "<p>Minimum Temperature: " + json.list[i].main.temp_min + "<p>";
	        forecast += "<p>Maximum Temperature: " + json.list[i].main.temp_max + "<p>";
	        forecast += "<p>Feels Like: " + json.list[i].main.feels_like + "</p>";
	        forecast += '<img src="https://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
	        forecast += "</td> </table>"
        }
        document.getElementById("forecastResults").innerHTML = forecast;
        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = a.filter(number => {
  return (number % 2 === 0)
});
console.log(b);
    });
    
});
