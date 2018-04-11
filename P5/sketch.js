var gif; 
var img;
var c;
var createImg;
var windowWidth;
var windowHeight;
var foo;
var width;
width = windowWidth;
height = windowHeight;
//var ramp, snowboarder1, snowboarder2, snowflake

function preload() {
    // preload() runs once
    snowboarder2 = loadImage('snowboarder2.gif');
    snowboarder1 = loadImage('snowboarder1.gif');
    snowflake = loadImage('snowflake.png');
    snow = loadImage('snow.jpg');
//    ramp = loadImage("ramp.png");

}
// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(255, 0, 200);
// }
// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }
function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(0);
}

var player = {x: 150, y: 250, size: 40 };
var coins = [];
var gravity = 0;
var score = 0;
var goUp = false;
var crashed = false;
var gap = {height:300, y:250};
var walls = [];
var wallTimer = 0;
var speed = 3;
var centerTextH = (windowWidth / 2);
var centerTextH = (windowHeight / 2);

var draw = function() {
 //   noStroke();
    background(0, 0, 0);
    drawPlayer();
    drawWalls();
    drawScore();

    if (crashed === false) {
        movePlayer();
        doCoin();
        moveWalls();
    } else { 
        youLoseScreen();
        }
    if (score >= 10) {
    youWinScreen();
    }
};
var drawWalls = function () {
    for (var wall of walls) {
       image(snow, wall.x, wall.y, wall.w, wall.h)
    //fill("gray");
    //rect(wall.x, wall.y, wall.w, wall.h)
}
};
var moveWalls = function() {
    for (var wall of walls) {
        wall.x -= speed;
    
     if (wall.x < player.x && wall.x + wall.w > player.x) {
         if (player.y - player.size / 2 < wall.y + wall.h && 
        player.y + player.size / 2 > wall.y) {
        crashed = true;
        }
    }
}
    if (wallTimer <= 0) {
        wallTimer = 40;
        gap.y += 25 * floor(random(3) - 1);

        if (gap.y < 150) {
            gap.y = 150
        }
        if (gap.y > 350) {
            gap.y = 350;
        };
     //   topWall.mirrorY 
  //      x: 500, y: 300, w: 50, h: gap.y + gap.height / 2
        var topWall = {x: 500, y:0, w:50, h: gap.y - gap.height/2};
        walls.push(topWall);
        var bottomWall = { x: 500, y: gap.y, w: 50, h: 500};
       walls.push(bottomWall);
    }
    wallTimer -= speed;
};

var doCoin = function() {
    var filteredCoins = coins.filter((coin) => {return coin.x > 0 && !coin.collected});
    coins = filteredCoins;
    if (random(0,100)< 50) {
        var newCoin = {x:500, y: random(0, 500), size: 20, collected: false};
        coins.push(newCoin);
    }
    for (var coin of coins) {
        image(snowflake, coin.x, coin.y, coin.size, coin.size); 
     //   fill(255,255,0);
     //   ellipse(coin.x, coin.y, coin.size, coin.size);

        coin.x -= speed;
        var playerRadius = player.size/2;
        var coinRadius = coin.size/2;
        var touchDistance = playerRadius + coinRadius;

        if (dist(player.x, player.y, coin.x, coin.y) < touchDistance) {
            coin.collected = true;
            score += 1;
        }
    }
};


var drawPlayer = function () {
   fill(0, 0, 255);
 //   image(gif, 90, 80);
    ellipse(player.x, player.y, player.size, player.size);
   // image(snowboarder1, player.x-35, player.y-35, windowHeight / 10, windowHeight / 10);
   // image(img, 0, height / 2, img.width / 2, img.height / 2);

}
var movePlayer = function () {
    if (goUp) {
    gravity -= 0.4;
    } else {
        gravity += 0.4;
    }
    if (gravity > 8) {
        gravity = 8;
    }
    if (gravity < -6) {
        gravity = -6;
    }
    player.y += gravity;

if (player.y > 500 || player.y < 0) {
    crashed = true;
    }
};
var mousePressed = function() {
    if (mouseButton === LEFT) {
        goUp = true;
        if (crashed) {
            crashed = false;
            player.y = 250;
            gravity = 0;
            score = 0;
            coins = [];
            walls = [];
        }
    }
};
var mouseReleased = function() {
    if (mouseButton === LEFT) {
        goUp = false;
    }
};
var youLoseScreen = function() {
    fill(255); 
    textSize(24);
    text("Game Over", 200, 200);
    text("Click to Restart", 100, 350);
};
var drawScore = function() {
    fill(255, 255, 0);
    textSize(24);
    text(score, 50, 450);
};
var youWinScreen = function () {
    fill(255);
    textSize(24);
    text("You Win", 200, 200);
};