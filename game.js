let player;
let laser1, laser2;
let bg;
let diamond;
let emitter1, emitter2;

let lasersGroup;

let gameState = "start";
let direction;

function preload() {
    floorImage = loadImage("assets/floor.png");

    frontImg = loadImage("assets/front.png");
    backImg = loadImage("assets/back.png");
    leftImg = loadImage("assets/left.png");
    rightImg = loadImage("assets/right.png");

    walkFrontAnim = loadImage("assets/walk-front.gif");
    walkBackAnim = loadImage("assets/walk-back.gif");
    walkLeftAnim = loadImage("assets/walk-left.gif");
    walkRightAnim = loadImage("assets/walk-right.gif");

    diamondImage = loadImage("assets/diamond.png");

    laser = loadImage("assets/laser-bit.png");

    emOnLeft = loadImage("assets/laser-emitter.png");
    emOffLeft = loadImage("assets/off-left.png");
    emOnRight = loadImage("assets/emitter-right.png");
    emOffRight = loadImage("assets/off-right.png");

}

function setup() {
    createCanvas(800,800);
    noSmooth();

    bg = createSprite(400, 400, 800, 800);
    bg.addImage("floor", floorImage);
    bg.scale = 12;

    player = createSprite(400,700,40,80);
    player.scale = 2.5;
    player.addImage("front", frontImg);
    //player.addImage("back", backImg);
    //player.addImage("left", leftImg);
    //player.addImage("right", rightImg);

    //player.addImage("walkFront", walkFrontAnim);
    //player.addImage("walkBack", walkBackAnim);
    //player.addImage("walkLeft", walkLeftAnim);
    //player.addImage("walkRight", walkRightAnim);

    diamond = createSprite(400, 100, 50, 50);
    diamond.addImage("diamond", diamondImage);
    diamond.scale = 1.4;

    emitter1 = createSprite(10, 600, 40, 40);
    emitter1.scale = 1.2;
    emitter1.addImage("left", emOnLeft);

    emitter2 = createSprite(790, 200, 40, 40);
    emitter2.scale = 1.2;
    emitter2.addImage("right", emOnRight);

}

function draw() {

    
    background(0);
    /*if(gameState === "start") {
        
    
        textSize(20);
        stroke("red");
        fill("red");
        text("Pressione a barra de espaço para iniciar!",200, 200 ); 
    }*/

    

    drawSprites();
}