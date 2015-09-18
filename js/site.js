$(document).ready(function() {
  console.log('adam rocks');
});

//show shit when button is pressed
$("#sidebar-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("pressed");
});