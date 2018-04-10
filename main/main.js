var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// ---------
var gap = {height: 300, y: 250};
var walls = {};

// --------


/* global constants */
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var mouseDown = 0;

var initialAscentRate = 1.0;
var initialDescentRate = 1.5; // in pixels per frame
var gravity = .08  // how quickly the descent rate increases
var liftFactor = .04; // how quickly the climb rate increases
var terminalVelocity = 5; // descent and ascent rate will never exceed this

var heliHeight = 26;
var heliWidth = 77;
var heli = new Image();
heli.src = "heli.png"

var backgroundHeight = 350;
var backgroundWidth = 702;
var backgroundV = 2; // background scroll velocity
var background = new Image();
background.src = "bg.jpg"


/* variables that will be reset every time setup is called: */
var heliX;
var heliY;
var scrollVal;
var ascentRate;
var descentRate;


window.onload = function () { setup(); }
    function setup() {
        gameState = "pause";
        clearScreen();
        heli.src = "heli.png";
        heliX = 100;
        heliY = 175;
        descentRate = initialDescentRate;
        ascentRate = initialAscentRate;
        ctx.drawImage(background, 0, 0, backgroundWidth, backgroundHeight);
        ctx.drawImage(heli, heliX, heliY, heliWidth, heliHeight);
    }


    function play() {
        if (gameState == "pause") {
            intervalId = window.requestAnimationFrame(draw, canvas); 
            gameState = "play";
        }
    }

    function pause() {
        if (gameState == "play") {
            gameState = "pause";
        }
    }

    function stop() {
        gameState = "stop"
    }

    function draw() {
        if (gameState == "play") {
            clearScreen();
            animateheli();
            window.requestAnimationFrame(draw, canvas);
        }
}

function animateheli() {
    if (mouseDown) {
        descentRate = initialDescentRate;
        heliY = heliY - ascentRate;

        if (!(ascentRate > terminalVelocity)) {
            ascentRate += liftFactor;
        }
    } else {
        ascentRate = initialAscentRate;
        heliY = heliY + descentRate;

        if (!(descentRate > terminalVelocity)) {
            descentRate += gravity;
        }
    }

    ctx.drawImage(heli, heliX, heliY, heliWidth, heliHeight);

}

/* Heads up - if this function is just named clear(), onclick fails silently! */
function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.body.onmousedown = function () {
    if (!(mouseDown == 1)) {
        ++mouseDown;
    }
}
document.body.onmouseup = function () {
    if (mouseDown > 0) {
        --mouseDown;
    }
    if (gameState == "pause") {
        play();
    }
}

document.body.onkeypress = function (e) {
    if (e.keyCode == 32) { // spacebar
        if (gameState == "pause") {
            play();
        } else {
            pause();
        }
    }
    if (e.keyCode == 114) {
        if (gameState != "play") {
            setup()
        }
    }
}

//cross browser compatability code
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function () {
        return window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
}

// $(document).ready(function () {
    //Play button
    //   $("#Play").click(function () {
     //  });

  //create a buttload of variables 
    
    // var heliX
    // var heliY
    // var heliWidth = 20
    // var heliHeight = 25
  
    // var bombArr = [];
    // var bombHeight = 60;
    // var bombWidth = 30;
    // var bombColor = "red";
    // var bombV = 0.5

// ----------------------------
// ----------------------------
// ----------------------------
// ----------------------------

// window.onload = function () { setup(); }

// function setup() {
//     gameState = "pause";
//     clearScreen();

//     heli.src = "heli.png";

//     brickList = new Array();
//     smokeList = new Array();

//     heliX = 100;
//     heliY = 175;



//     iterationCount = 0;
//     score = 0;

//     scrollVal = 0;

//     ctx.font = font;

//     addBrick();

//     ctx.drawImage(background, 0, 0, backgroundWidth, backgroundHeight);
//     ctx.drawImage(heli, heliX, heliY, heliWidth, heliHeight);

//     ctx.fillStyle = textColor;
//     ctx.fillText('Press spacebar to play/pause', 10, 340);
// }


// var player = { x: 150, y: 250, size: 50 };
// var gravity = 1;
// var goUp = false;


// var start = function () {
//   //  background(0, 0, 0);
//       // ctx.fillRect(50, x, 90, 25);
//     drawPlayer();
//     movePlayer();
//     ctx.drawImage(background, canvas.width, 0, backgroundWidth, backgroundHeight);
// };

// var drawPlayer = function () {
//     ctx.fillRect(player.x, player.y, player.size, player.size);
// }

// var movePlayer = function () {
//     if (goUp) {
//         gravity -= 0.4;
//     } else {
//         gravity += 0.4;
//     }
//     heli.y += gravity;
// }

// var goUp = false;
// var mousePressed = function () {
//     if (mouseButton === LEFT) {
//         goUp = true;
//     }
// };
// var mouseReleased = function () {
//     if (mouseButton === LEFT) {
//         goUp = false;
//     }
// };

// function animateheli() {
//     if (mouseDown) {
//         descentRate = initialDescentRate;
//         heliY = heliY - ascentRate;

//         if (!(ascentRate > terminalVelocity)) {
//             ascentRate += liftFactor;
//         }
//     } else {
//         ascentRate = initialAscentRate;
//         heliY = heliY + descentRate;

//         if (!(descentRate > terminalVelocity)) {
//             descentRate += gravity;
//         }
//     }

//     // border detection
//     if ((heliY < 0) || (heliY > (canvas.height - heliHeight))) {
//         gameOver();
//     }

//     ctx.drawImage(heli, heliX, heliY, heliWidth, heliHeight);



    // $("#bomb").click(function () {
    // start();
    //  });





    // window.onload = function () {
    // var canvas = document.getElementById('canvas');
    // var ctx = canvas.getContext('2d');
    //    ctx.drawImage(background, 0, 0, backgroundWidth, backgroundHeight);
    //     ctx.drawImage(a, 50, 30, heliWidth, heliHeight);
 
    // ctx.fillStyle = '#212121';
    // // A variable to store the requestID.
    // var requestID;
    // // Variables to for the drawing position and object.
    // var posX = 50;
    // var boxWidth = 50;
    // var pixelsPerFrame = 5; // How many pixels the box should move per frame.
    // // Draw the initial box on the canvas.
    // ctx.fillRect(50, x, 90, 25);
    // // Animate.
    // function animate() {
    //     requestID = requestAnimationFrame(animate);
    // }
        // If the box has not reached the end draw on the canvas.
        // Otherwise stop the animation.
    //     if (posX <= (canvas.width - boxWidth)) {
    //         ctx.clearRect((posX - pixelsPerFrame), 0, boxWidth, canvas.height);
    //         ctx.fillRect(posX, 0, boxWidth, canvas.height);
    //         posX += pixelsPerFrame;
    //     } else {
    //         cancelAnimationFrame(requestID);
    //     }
    // }
    // }

//do controls for helicopter

//heli movement on canvas

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


// ----------heli movement ----EXPAND below-----------------------
    // var canvas = document.getElementById('canvas');
    // var ctx = canvas.getContext('2d');
    //     x = 10, 
    //     y = 10, 
    //     width = 20, 
    //     height = 20; 
	
    // function drawRect(x, y, width, height) {
    //     ctx.fillStyle = '#666'; 
    //     ctx.fillRect(x, y, width, height); 

    //     heli.src = "heli.png";

    // }

    // drawRect(x, y, width, height); 

    // window.onkeydown = function (event) {
    //     var keydown = event.keyCode; 

    //     if (keydown === 39 && x <= 460) {
    //         x = x + 20; //move 20 pixels
    //     }
    //     else if (keydown === 37 && x > 10) {
    //         x = x - 20;
    //     }
    //     else if (keydown === 38 && y > 10) {
    //         y = y - 20; 
    //     }
    //     else if (keydown === 40 && y <= 460) {
    //         y = y + 20; 
    //     }

    //     ctx.clearRect(0, 0, 500, 500);


    //     drawRect(x, y, width, height);
    // };
// // ----------heli movement -----EXPAND above------------------------------



// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var x = canvas.width;
// var y = Math.floor(Math.random() * (canvas.height))

//     function drawBall() {
//         ctx.rect(50, 100, 25, 60);
//         ctx.fillStyle = "red";
//         ctx.fill();
//     }

//     function draw() {
//         console.log("drawball")
//         ctx.clearRect(x, 100, canvas.width, canvas.height);
//         drawBall();
//         x += -1;
//     }
    
//     setInterval(draw, 20);
//     setInterval(drawball, 20);


//     $("#bomb").click(function () {
//         setInterval(function () { drawball(); }, 10);
//     });


// // figure out how to get this shit into an array 
//     function addBomb() {
//         console.log("bombworking")
//         newBomb = {}
//         newBomb.x = canvas.width;
//         newBomb.y = Math.floor(Math.random() * (canvas.height - bombHeight))
//         bombArr.push(newBomb);
//         console.log(newBomb)
//     }
//         console.log(newBomb)


//     function clearScreen() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//     }
//     window.requestAnimationFrame(draw, canvas);

//     //dont delete this closing tag

    // var vendors = ['webkit', 'moz'];
    // for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    //     window.requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
    //     window.cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
    // }

    // var canvas = document.getElementById('canvas'),
    //     cw = canvas.width,
    //     ch = canvas.height,
    //     cx = null,
    //     fps = 30,
    //     bX = 30,
    //     bY = Math.floor(Math.random() * (canvas.height - bombHeight)),
    //     mX = 50,
    //     mY = 10,
    //     lastTime = (new Date()).getTime(),
    //     currentTime = 0,
    //     delta = 0;

    // function gameLoop() {
    //     window.requestAnimationFrame(gameLoop);

    //     currentTime = (new Date()).getTime();
    //     delta = (currentTime - lastTime) / 1000;
    //     cx.clearRect(0, 0, cw, cw);

    //     cx.beginPath();
    //     cx.fillStyle = 'red';
    //     cx.rect(bX, bY, 25, 60);
    //     cx.fill();
    //     if (bX >= cw || bX <= 0) {
    //         mX + 1;
    //     }
    //     // if (bY >= ch || bY <= 0) {
    //     //     mY *= -1;
    //     // }

    //     //bX += (mX * delta);
    //     //bY += (mY * delta);

    //    lastTime = currentTime;


    
    // }

    // if (typeof (canvas.getContext) !== undefined) {
    //     cx = canvas.getContext('2d');

    //     gameLoop();
    // }




//});