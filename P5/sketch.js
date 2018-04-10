
function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(250);
}

var player = { x: 150, y: 250, size: 50 };
var coins = [];
var gravity = 0;
var score = 0;
var goUp = false;
var crashed = false;
var gap = {height: 350, y: 250};
var walls = [];
var wallTimer = 0;

var draw = function() {
    noStroke();
    background(0, 0, 0);
    drawPlayer();
    drawWalls();
    drawScore();

    if (crashed === false) {
        movePlayer();
        doCoin();
        moveWalls();
    }   else { 
        youLoseScreen();
        }
};
var drawWalls = function () {
    for (var wall of walls) {
    fill("green");
    rect(wall.x, wall.y, wall.w, wall.h)
}
};
var moveWalls = function () {
    for (var wall of walls) {
        wall.x -= 3;
    
     if (wall.x < player.x && wall.x + wall.w > player.x) {
         if (player.y - player.size/2 < wall.y + wall.h && 
        player.y + player.size/2 > wall.y) {
        crashed = true;
        }
    }
}
    if (wallTimer <= 0) {
        wallTimer = 16;
        gap.y += 25 * floor(random(2.66) - 1);

        var newWall = { x: 500, y: 0, w: 50, h: gap.y - gap.height/2 };
        walls.push(newWall);
        var newWall = { x: 500, y: gap.y + 100, w: 50, h: gap.y - gap.height/2 };
        walls.push(newWall);
    }
    wallTimer -= 1;
};


    if (gap.y < 150) {
        gap.y = 150
    }
    if (gap.y > 350) {
        gap.y = 350;
    };

var doCoin = function() {
    var filteredCoins = coins.filter((coin) => {return coin.x > 0 && !coin.collected});
    coins = filteredCoins;
    if (random(0,100)< 3) {
        var newCoin = {x:600, y: random(0, 500), size: 20, collected: false};
        coins.push(newCoin);
    }
    for (var coin of coins) {

        fill(255,255,0);
        ellipse(coin.x, coin.y, coin.size, coin.size);

        coin.x -= 3;
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
    ellipse(player.x, player.y, player.size, player.size);
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
    text("click to restart", 180, 350);
};
var drawScore = function() {
    fill(255, 255, 0);
    textSize(24);
    text(score, 50, 450);
};

