
function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(250);
}

var player = { x: 150, y: 250, size: 50 };
var gravity = 0;

var goUp = false;
var crashed = false;

var draw = function () {
    background(0, 0, 0);
    drawPlayer();

    if (crashed === false) {
        movePlayer();
    } else { youLoseScreen();
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
    }
    if (crashed) {
        crashed = false;
        player.y = 250;
        gravity = 0;
    }
}
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
