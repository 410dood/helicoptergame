//flappy player-like
//mouse click or x to flap

var GRAVITY = .3;
var FLAP = -7;
var GROUND_Y = 450;
var MIN_OPENING = 300;
var player, ground;
var ramps;
var gameOver;
var snowboarder1, ramp, snow, snowboarder2;


function setup() {
    createCanvas(400, 600);

    snowboarder1 = loadImage("snowboarder1.png");
    ramp = loadImage("ramp.png");
    snow = loadImage("snow.jpg");
    snowboarder2 = loadImage("snowboarder2.png");

    player = createSprite(width / 2, height / 2, 40, 40);
    player.rotateToDirection = true;
    player.velocity.x = 4;
    player.setCollider("circle", 0, 0, 20);
    player.addImage(snowboarder1);

    ground = createSprite(800 / 2, GROUND_Y + 100); //image 800x200
    ground.addImage(snow);

    ramps = new Group();
    gameOver = true;
    updateSprites(false);

    camera.position.y = height / 2;
}

function draw() {

    if (gameOver && keyWentDown("x"))
        newGame();

    if (!gameOver) {

        if (keyWentDown("x"))
            player.velocity.y = FLAP;

        player.velocity.y += GRAVITY;

        if (player.position.y < 0)
            player.position.y = 0;

        if (player.position.y + player.height / 2 > GROUND_Y)
            die();

        if (player.overlap(ramps))
            die();

        //spawn ramps
        if (frameCount % 60 == 0) {
            var pipeH = random(50, 300);
            var ramp = createSprite(player.position.x + width, GROUND_Y - pipeH / 2 + 1 + 100, 80, pipeH);
            ramp.addImage(ramp);
            ramps.add(ramp);

            //top ramp
            if (pipeH < 200) {
                pipeH = height - (height - GROUND_Y) - (pipeH + MIN_OPENING);
                ramp = createSprite(player.position.x + width, pipeH / 2 - 100, 80, pipeH);
                ramp.mirrorY(-1);
                ramp.addImage(ramp);
                ramps.add(ramp);
            }
        }

        //get rid of passed ramps
        for (var i = 0; i < ramps.length; i++)
            if (ramps[i].position.x < player.position.x - width / 2)
                ramps[i].remove();
    }

    camera.position.x = player.position.x + width / 4;

    //wrap ground
    if (camera.position.x > ground.position.x - ground.width + width / 2)
        ground.position.x += ground.width;

    background(247, 134, 131);
    camera.off();
    image(snowboarder2, 0, GROUND_Y - 190);
    camera.on();

    drawSprites(ramps);
    drawSprite(ground);
    drawSprite(player);
}

function die() {
    updateSprites(false);
    gameOver = true;
}

function newGame() {
    ramps.removeSprites();
    gameOver = false;
    updateSprites(true);
    player.position.x = width / 2;
    player.position.y = height / 2;
    player.velocity.y = 0;
    ground.position.x = 800 / 2;
    ground.position.y = GROUND_Y + 100;
}

function mousePressed() {
    if (gameOver)
        newGame();
    player.velocity.y = FLAP;
}