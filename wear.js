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
    setOutfits(document);

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
function setOutfits(document){
  if(temp >= 20){
    $("#h1").html("Hot summer, wear sunscreen!");
    $("#outfit1").attr("src" , "images/hot_capris.jpg");
    $("#outfit2").attr("src" , "images/hot_dress.jpg");
    $("#outfit3").attr("src" , "images/hot_kurta.jpg");
    $("#outfit4").attr("src" , "images/hot_skirt.jpg");
  } else if(temp < 20 && temp > 17){
    $("#h1").html("Warm Summer");
    $("#outfit1").attr("src" , "images/summer_romper.jpg");
    $("#outfit2").attr("src" , "images/summer_dress.jpg");
    $("#outfit3").attr("src" , "images/summer_shorts.jpg");
    $("#outfit4").attr("src" , "images/summer_hat.jpg");
  } else if(temp > 10 && temp <= 17){
    $("#h1").html("Mild Spring");
    $("#outfit1").attr("src" , "images/spring_bun.jpg");
    $("#outfit2").attr("src" , "images/spring_floral.jpg");
    $("#outfit3").attr("src" , "images/spring_jeans.jpg");
    $("#outfit4").attr("src" , "images/spring_overalls.jpg");
  } else if(temp > 5 && temp <= 10){
    $("#h1").html("Light Fall");
    $("#outfit1").attr("src" , "images/fall_black.jpg");
    $("#outfit2").attr("src" , "images/fall_wool.jpg");
    $("#outfit3").attr("src" , "images/fall_sweater.jpg");
    $("#outfit4").attr("src" , "images/fall_red.jpg");
  } else if (temp > 0 && temp <= 5){
    $("#h1").html("Chilly");
    $("#outfit1").attr("src" , "images/chilly_plaid.jpg");
    $("#outfit2").attr("src" , "images/chilly_skirt.jpg");
    $("#outfit3").attr("src" , "images/chilly_sweater.jpg");
    $("#outfit4").attr("src" , "images/chilly_tunic.jpg");
  } else if(temp > -5  && temp <= 0){
    $("#h1").html("Brisk");
    $("#outfit1").attr("src" , "images/winter_black.jpg");
    $("#outfit2").attr("src" , "images/winter_jacket.jpg");
    $("#outfit3").attr("src" , "images/winter_beanie.jpg");
    $("#outfit4").attr("src" , "images/winter_grey.jpg");
  } else if(temp > -60){
    $("#h1").html("Freezing, dress warmly!");
    $("#outfit1").attr("src" , "images/freeze_thermal.jpg");
    $("#outfit2").attr("src" , "images/freeze_puffy.jpg");
    $("#outfit3").attr("src" , "images/freeze_layers.jpg");
    $("#outfit4").attr("src" , "images/freeze_hat.jpg");
  }
  

}

request.send();
