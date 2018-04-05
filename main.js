// $(document).ready(function () {
//Play button
 //   $("#Play").click(function () {
  //  });

  //create a buttload of variables 

    var heliX
    var heliY
    var heliWidth = 150
    var heliHeight = 125
    var heli = new Image();
    heli.src = "heli.png";


$(document).ready(function () {
    $("#start").click(function () {
        $("splashScreen").fadeOut();  //   load new game.html page?  or change class to reveal canvas potentially? --> $("p").slideToggle();
    });



    var canvas = document.getElementById('screen');
    var ctx = canvas.getContext('2d');


    window.onload = function () {
  
        function setup() {
            ctx.fillStyle = 'rgb(200, 0, 0)'; // in place of heli at the moment
            ctx.fillRect(10, 40, 30, 50);

        // heli.src = "heli.png";
        // heliY = 100;
        // heliY = 175;
        // ctx.drawImage(heli, heliX, heliY, heliWidth, heliHeight);













    };


        

    }





//do controls for helicopter

//chopper movement on canvas





//figure out how to create the obstacles --- prob something with math.random




//colisions???

// how do i make this a game that you can win? Do i need to?



// ----------heli movement -below-----------
    var stage = document.getElementById('screen'), 
        ctx = stage.getContext('2d'), 
        x = 10, 
        y = 10, 
        wid = 20, 
        hei = 20; 

    //Draw square (heli) 		
    function drawRect(x, y, wid, hei) {
        ctx.fillStyle = '#666'; 
        ctx.fillRect(x, y, wid, hei); 
    }

    drawRect(x, y, wid, hei); 

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
        drawRect(x, y, wid, hei);
    };
// ----------heli movement -----above-----------


//dont delete this closing tag
});