var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');



$(document).ready(function () {
    //Play button
    //   $("#Play").click(function () {
     //  });

  //create a buttload of variables 
    
    var heliX
    var heliY
    var heliWidth = 20
    var heliHeight = 25
  
    var bombArr;
    var bombHeight = 60;
    var bombWidth = 30;
    var bombColor = "red";

    var backgroundHeight = 350;
    var backgroundWidth = 700;
    var background = new Image();
    background.src = "pic2.jpg"
    var heli = new Image();
    heli.src = "heli.png";



    // $("#start").click(function () {
    //     $("splashScreen").fadeOut();  //   load new game.html page?  or change class to reveal canvas potentially? --> $("p").slideToggle();
    // });

//   window.onload = function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
        ctx.drawImage(background, 0, 0, backgroundWidth, backgroundHeight);
        ctx.drawImage(heli, 10, 30, heliWidth, heliHeight);

    //   function setup() {
    //       bombArr = new Array();


//            };
        // function obstacle() {
        //     newBomb = {}
        //     newBomb.x = 50    //canvas.width;
        //     newBomb.y = 50   //Math.floor(Math.random() * (canvas.height - brickHeight))
        //     BombArr.push(newBomb);
//        }


  //  }
    

      // heli.src = "heli.png";
        // heliY = 100;
        // heliY = 175;
        // ctx.drawImage(heli, heliX, heliY, heliWidth, heliHeight);

  














//do controls for helicopter

//chopper movement on canvas



    $("#bombs").click(function () {
    addBrick();
    });

//figure out how to create the obstacles --- prob something with math.random

//colisions???

 //   if (object1.x < object2.x + object2.width && object1.x + object1.width > object2.x &&
   //     object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
        // The objects are touching
 //   }


 
// how do i make this a game that you can win? Do i need to?


// ----------heli movement ----below-----------------------
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
        x = 10, 
        y = 10, 
        width = 20, 
        height = 20; 

    //Draw square (heli) 		
    function drawRect(x, y, width, height) {
        ctx.fillStyle = '#666'; 
        ctx.fillRect(x, y, width, height); 
    }

    drawRect(x, y, width, height); 

    //move rectangle (heli) using arrow keys
    window.onkeydown = function (event) {
        var keydown = event.keyCode; 

        if (keydown === 39 && x <= 460) {
            x = x + 20; //move 20 pixels
        }
        else if (keydown === 37 && x > 10) {
            x = x - 20;
        }
        else if (keydown === 38 && y > 10) {
            y = y - 20; 
        }
        else if (keydown === 40 && y <= 460) {
            y = y + 20; 
        }

//clear heli past movement !!!make sure and put below
        ctx.clearRect(0, 0, 500, 500);

//redraw heli
        drawRect(x, y, width, height);
    };
// ----------heli movement -----above------------------------------

    var bomb = document.getElementById("canvas");
    var ctx = bomb.getContext("2d");

    // Red rectangle
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "red";
    ctx.rect(97, 100, 20, 150);
    ctx.stroke();
    drawRect(x, y, width, height);

    // Green rectangle
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "green";
    ctx.rect(130, 0, 20, 60);
    ctx.stroke();




//dont delete this closing tag
});