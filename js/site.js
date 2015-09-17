$(document).ready(function() {
  //hide shit first
  $("#wrapper").toggleClass("toggled");
});

//show shit when button is pressed
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});