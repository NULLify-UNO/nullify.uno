$(document).ready(function() {
  console.log('adam rocks');



  //console.log(img);
});

 
//show shit when button is pressed
// $("#sidebar-toggle").click(function (e) {
//   e.preventDefault();
//   $("#wrapper").toggleClass("pressed");
// });






// ********************************
// ******** Toggle CSS ************      
// ********************************

$('#toggle').click(function (event) {
  if (jQuery('#toggle').is(':checked')) {
    changeFavicon('img/favicon.ico');
    changeLogo('img/favicon.ico');
    changeProp('mp-level', 'background', '#FF3333');
    changeProp('headingMenu', 'color', '#d84545');
  } else {
    changeFavicon('img/favicons/favicon.ico');
    changeLogo('img/favicons/favicon-96x96.png');
    changeProp('mp-level', 'background', '#53AA53');
    changeProp('headingMenu', 'color', '#3A773A');
  }
});

document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
  var link = document.createElement('link'),
  oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}

function changeLogo(src) {
  document.getElementById("main-logo").src=src;
}

function changeProp(id, prop, color) {
  switch (prop)
  {
    case "background":
      document.getElementById(id).style.background = color;
      break;
    case "color":
      document.getElementById(id).style.color = color;
      break;
    default: 
      alert('Default case - bad code');
      break;
  }
}