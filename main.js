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
  
    var bombArr = [];
    var bombHeight = 60;
    var bombWidth = 30;
    var bombColor = "red";
    var bombV = 0.5

    var backgroundHeight = 300;
    var backgroundWidth = 400;
    var background = new Image();
    background.src = "pic2.jpg"
    var heli = new Image();
    heli.src = "heli.png";

//   window.onload = function () {


    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
        // ctx.drawImage(background, 0, 0, backgroundWidth, backgroundHeight);
        // ctx.drawImage(heli, 10, 30, heliWidth, heliHeight);

    ctx.fillStyle = '#212121';
    // A variable to store the requestID.
    var requestID;
    // Variables to for the drawing position and object.
    var posX = 50;
    var boxWidth = 50;
    var pixelsPerFrame = 5; // How many pixels the box should move per frame.
    // Draw the initial box on the canvas.
    ctx.fillRect(posX, 0, 90, 25);
    // Animate.
    function animate() {
        requestID = requestAnimationFrame(animate);

        // If the box has not reached the end draw on the canvas.
        // Otherwise stop the animation.
        if (posX <= (canvas.width - boxWidth)) {
            ctx.clearRect((posX - pixelsPerFrame), 0, boxWidth, canvas.height);
            ctx.fillRect(posX, 0, boxWidth, canvas.height);
            posX += pixelsPerFrame;
        } else {
            cancelAnimationFrame(requestID);
        }
    }


//do controls for helicopter

//chopper movement on canvas

//figure out how to create the obstacles --- prob something with math.random

//colisions???

 //   if (object1.x < object2.x + object2.width && object1.x + object1.width > object2.x &&
   //     object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
        // The objects are touching
 //   }
    // var helipic = new Image();
    // var canvas = document.getElementById('canvas');
    // var ctx = canvas.getContext("2d");
    // var x = canvas.width;
    // var y = 0;

    // helipic.onload = animate;
    // helipic.src = "http://i.stack.imgur.com/Rk0DW.png";   // load image

    // function animate() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
    //     ctx.drawImage(imgTag, x, y);                       // draw image at current position
    //     x -= 4;
    //     if (x > 250) requestAnimationFrame(animate)        // loop
    // }




            // heliY = 100;
        // heliY = 175;
        // ctx.drawImage(heli, heliX, heliY, heliWidth, heliHeight);


// // ----------heli movement ----EXPAND below-----------------------
//     var canvas = document.getElementById('canvas');
//     var ctx = canvas.getContext('2d');
//         x = 10, 
//         y = 10, 
//         width = 20, 
//         height = 20; 
	
//     function drawRect(x, y, width, height) {
//         ctx.fillStyle = '#666'; 
//         ctx.fillRect(x, y, width, height); 

//         heli.src = "heli.png";

//     }





//     drawRect(x, y, width, height); 

//     window.onkeydown = function (event) {
//         var keydown = event.keyCode; 

//         if (keydown === 39 && x <= 460) {
//             x = x + 20; //move 20 pixels
//         }
//         else if (keydown === 37 && x > 10) {
//             x = x - 20;
//         }
//         else if (keydown === 38 && y > 10) {
//             y = y - 20; 
//         }
//         else if (keydown === 40 && y <= 460) {
//             y = y + 20; 
//         }

//         ctx.clearRect(0, 0, 500, 500);


//         drawRect(x, y, width, height);
//     };
// // ----------heli movement -----EXPAND above------------------------------



// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var x = canvas.width;
// var y = Math.floor(Math.random() * (canvas.height))
// var rextX_0 = canvas.width;
// var rectY_0 = Math.floor(Math.random() * (canvas.height))

// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, 30, 0, Math.PI * 2);
//     ctx.rect(x, y, 25, 60);
//     ctx.rect(rextX_0, y, 90, 25);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// }

// function draw() {
//     console.log("drawball")
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBall();
//     x += -1;

// }
// setInterval(draw, 3000);

//     $("#bomb").click(function () {
//         setInterval(function () { drawball(); }, 10);
//     });




// // figure out how to get this shit into an array 
// function addBomb() {
//     console.log("bombworking")
//     newBomb = {}
//     newBomb.x = canvas.width;
//     newBomb.y = Math.floor(Math.random() * (canvas.height - bombHeight))
//     bombArr.push(newBomb);
//     console.log(newBomb)
// }


    //dont delete this closing tag
});