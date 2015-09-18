$(document).ready(function() {
  console.log('adam rocks');
});

//show shit when button is pressed
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});