// this application uses the Open Weather MAP API http://openweathermap.org/

$(document).ready(function(){

var APPID = '894c88eee3fbaf06bc0f1b75d7d026fa';	// Your Yahoo Application ID
var DEG = 'c';	// c for celsius, f for fahrenheit
var temp;
var city;
var icon;

temp = $("#temp");
city = $("#city");
icon = $("#icon");

var weather = {};
weather.temp = "55";
weather.city = "Loveland";
weather.icon = "Cloud-Drizzle-Moon.svg";

update(weather);

});

function update(weather){
  temp.innerHTML = weather.temp + "&deg;";
  city.innerHTML = weather.city;
  icon.src = "icons/" + weather.icon;
}
