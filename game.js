let player;
let walk;

let laser1, laser2;
let vel1 = 0;
let vel2 = 0;
let bg;
let diamond;
let emitter1, emitter2;

let lasersGroup;

let gameState = "start";
let direction = "back";
let moving;

function preload() {
    floorImage = loadImage("assets/floor.png");

    frontImg = loadImage("assets/front.png");
    backImg = loadImage("assets/back.png");
    leftImg = loadImage("assets/left2.png");
    rightImg = loadImage("assets/right2.png");

    walkFrontAnim = loadAnimation("assets/front1.png", "assets/front2.png", "assets/front3.png", "assets/front4.png");
    walkBackAnim = loadAnimation("assets/back1.png", "assets/back2.png", "assets/back3.png", "assets/back4.png");
    walkLeftAnim = loadAnimation("assets/left1.png", "assets/left2.png", "assets/left3.png", "assets/left4.png");
    walkRightAnim = loadAnimation("assets/right1.png", "assets/right2.png", "assets/right3.png", "assets/right4.png");

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
    bg.tint = color(255, 255, 255, 100)

    player = createSprite(400,700,40,80);
    player.scale = 2.5;
    player.addImage("front", frontImg);
    player.addImage("back", backImg);
    player.addImage("left", leftImg);
    player.addImage("right", rightImg);

    player.addAnimation("walkFront", walkFrontAnim);
    player.addAnimation("walkBack", walkBackAnim);
    player.addAnimation("walkLeft", walkLeftAnim);
    player.addAnimation("walkRight", walkRightAnim);

    diamond = createSprite(400, 100, 50, 50);
    diamond.addImage("diamond", diamondImage);
    diamond.scale = 1.4;

    laser1 = createSprite(-70, 600, 60, 20);
    laser1.scale = 3.2;
    laser1.addImage("laser1", laser);

    laser2 = createSprite(870, 200, 60, 20);
    laser2.scale = 3.2;
    laser2.addImage("laser1", laser);

    emitter1 = createSprite(10, 600, 40, 40);
    emitter1.scale = 2.2;
    emitter1.addImage("left", emOnLeft);

    emitter2 = createSprite(790, 200, 40, 40);
    emitter2.scale = 2.2;
    emitter2.addImage("right", emOnRight);

    player.changeImage("back");
}

function draw() {


    background(0);
    moving = false;
    player.velocity.x = 0;
    player.velocity.y = 0;

    laser1.velocity.x = 0;
    laser2.velocity.x = 0;

    if(gameState === "start") {
        
    
        textSize(20);
        stroke("red");
        fill("red");
        text("Pressione a barra de espaço para iniciar!",200, 200 ); 
    }
    if(gameState === "play"){
        if(keyDown('w') || keyDown(UP_ARROW)){
        player.velocity.y = -4;
        player.changeAnimation("walkBack");
        moving = true;
        direction = "back";
        }
        if(keyDown('s') || keyDown(DOWN_ARROW)){
            player.velocity.y = 4;
            player.changeAnimation("walkFront");
            moving = true;
            direction = "front";
        }
        if(keyDown('a') || keyDown(LEFT_ARROW)){
            player.velocity.x = -4;
            player.changeAnimation("walkLeft");
            moving = true;
            direction = "left";
        }
        if(keyDown('d') || keyDown(RIGHT_ARROW)){
            player.velocity.x = 4;
            player.changeAnimation("walkRight");
            moving = true;
            direction = "right";
        }
        if(!moving){
            if(direction == "back"){
                player.changeImage("back");
            }
            else if(direction == "front"){
                player.changeImage("front");
            }
            else if(direction == "left") {
                player.changeImage("left");
            }
            else {
                player.changeImage("right");
            }
        }

        laser1.velocity.x = 12;
        if (laser1.x > 870){
            laser1.x = -140;
           //vel1 += 1;
            laser1.velocityX *= 25;
        }
    }


    player.position.x = constrain(player.position.x,35,765);
    player.position.y = constrain(player.position.y,85,720);  

    drawSprites();
}

function keyPressed(){
    if(key === " "){
     gameState = "play"   
    }
}