var request = new XMLHttpRequest();
request.open('GET', 'https://api.uwaterloo.ca/v2/weather/current.json', true);

//Weather Variables
var currTemp;
var windchill;
var wind;

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    //Success!
    var weather = JSON.parse(request.responseText);
    parseData(weather);

  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

function parseData(weather){   
    currTemp = weather.data.temperature_current_c;
    windchill = weather.data.windchill_c;
    wind = weather.data.wind_speed_kph;
    temp = (windchill == null)? currTemp : windchill;

    //JQuery Set HTML
  $("#current_temp").html("Current Temperature: " + currTemp + " °C");
  $("#windchill").html("Windchill: " + windchill + " °C");
  $("#wind").html("Wind Speed: " + wind + " km per hour ");
};

request.send();
