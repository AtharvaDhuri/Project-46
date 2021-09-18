var baloon, ballonImg;
var bg, bgImg;

var bottom, top;

var obsTop1Img, obsTop2Img;
var barImg;

function preload() {
    ballonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");
    bgImg = loadImage("assets/bg.png");

    obsTop1Img = loadImage("assets/obsTop1.png");
    obsTop2Img = loadImage("assets/obsTop2.png");

    barImg = loadImage("assets/obsBottom2.png");
}

function setup() {
    createCanvas(1000, 400);
    bg = createSprite(500, 200);
    bg.addImage(bgImg);

    baloon = createSprite(200, 150);
    baloon.addAnimation('ballon', ballonImg);
    baloon.scale = 0.3

    bottom = createSprite(350, 390, 1000, 20);
    bottom.visible = false;
}

function draw() {
    background(0);

    baloon.velocityY += 1
    if(keyDown("space")) {
        baloon.velocityY = -10
    }

    spawnObstacleTop();
    spawnBuilding();
    spawnBar();
    //baloon.collide(bottom);

    drawSprites();
}

function spawnObstacleTop() {
    if(frameCount %120 ===0) {
    var obsTop = createSprite(1000, 50, 50, 50);
    obsTop.y = random(30, 100)
    obsTop.velocityX = -3

    var rand = Math.round(random(1, 2));

    switch(rand) {
        case 1: obsTop.addImage(obsTop1Img);
        break;
        case 2: obsTop.addImage(obsTop2Img);
        break;
        default: break;
    }

    obsTop.scale = 0.1

    obsTop.lifetime = 333

    baloon.depth = obsTop.depth +1;

    }

}

function spawnBar() {
    if(frameCount% 170 ===0) {
        var bar = createSprite(1000, 330, 50, 200);
        bar.velocityX = -3
        bar.addImage(barImg);
        bar.scale = 0.1

        bar.lifetime = 333;
    }
}

function spawnBuilding() {
    
}