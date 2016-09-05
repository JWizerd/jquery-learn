// this application uses the Open Weather MAP API http://openweathermap.org/

$(document).ready(function(){
  getWeatherByCoords(); // THIS GUY RUNS THE SHOW
});

function getWeatherByCoords(){
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    openWeatherApiCall(lat, long);
    });
  }
  else {
    alert("We're sorry but you do not have navigator installed on your browser. This app will not work for you.");
  }
}

function openWeatherApiCall(latitude, longitude) {
  var APPID = '894c88eee3fbaf06bc0f1b75d7d026fa';
  var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude +
  "&lon=" + longitude + "&units=imperial&APPID=" + APPID;

  $.get(url, function(data) {
    $("#icon").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    $("#temp").append(data.main.temp + "&deg;");
    $("#city").append(data.name);
    $("#description").append(data.weather[0].description);

    // change background if temp is high low or med
    backgroundImagesByTemp(data);
  }).fail(function(){
    alert("FAILURE");
  });
}

function backgroundImagesByTemp(data){
  var temperature = data.main.temp;
  if (temperature < 45) {
    $("body").css("background-image", "url('images/cold.jpg')");
  }
  else if (temperature > 45 && temperature < 80) {
    $("body").css("background-image", "url('images/warm.jpg')");
  }
  else {
    $("body").css("background-image", "url('images/hot.jpg')");
  }
}
