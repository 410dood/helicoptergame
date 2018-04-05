$(document).ready(function () {
//Play button
    $("#Play").click(function () {
//   load new game.html page?  or change class to reveal canvas potentially? --> $("p").slideToggle();

    });
});

var canvas = document.getElementById('canvas'); 
var ctx = canvas.getContext('2d');


//create a buttload of variables 



//do something with canvas

//do controls for helicopter

//chopper movement on canvas
let heli
let heliX
let heliY
let heliWidth = 50
let heliHeight = 25
ctx.drawImage(heli, heliX, heliY, heliWidth, heliHeight);



//figure out how to create the obstacles --- prob something with math.random

//colisions???

// how do i make this a game that you can win? Do i need to?
