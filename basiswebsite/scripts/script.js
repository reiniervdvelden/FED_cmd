// JavaScript Document
var coin = document.querySelector('#coin'); //coin svg

document.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    coin.classList.add("coin");
  }
});

var laserstraal = document.querySelector('#laserstraal'); //laserstraal png

document.addEventListener("keypress", function(event) {
  if (event.keyCode == 48) {
    laserstraal.classList.add("animation_laser_straal");
  }
});
