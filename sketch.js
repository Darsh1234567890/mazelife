var char;
var wall1;
var wall2_1;
var wall3;
var wall4;
var wall5;

var wall6_1;
var wall6_2;
var wall6_3;

var wall7;
var wall8;
var wall9;

var doo1;

var enemy1;

var bg
var bgimg

var key
var keyimg

function preload() {
  bgimg = loadImage("qS7kaA.jpg");
  keyimg = loadImage("key.png");
}

function setup() {
  createCanvas(1000,600);
  edges = createEdgeSprites();
  //Walls
  char = createSprite(200,450,20,20);

   //key
   key = createSprite(650,155,20,20);
   key.addImage(keyimg);
   key.scale = 0.5;

  wall1 = createSprite(50,600,500,200);

  wall2_1 = createSprite(300,300,50,250);

  wall3 = createSprite(475,225,400,50);
  wall4 = createSprite(800,350,50,300);

  wall5 = createSprite(300,50,50,200);

  wall6_1 = createSprite(400,175,50,150);
  wall6_2 = createSprite(400,65,50,25)
  wall6_3 = createSprite(400,90,8,25)

  wall7 = createSprite(500,50,50,200);
  wall8 = createSprite(600,125,50,175);
  wall9 = createSprite(700,50,50,400);

  door1 = createSprite(300,450,50,100)
  door1.shapeColor = "brown";

  //Enemies
  enemy1 = createSprite(350,188,50,25);
  enemy1.shapeColor = "red"
  enemy1.setVelocity(0,-3)

 
}

function draw() {
  background(bgimg);
  move();

  //Enemy collides
  enemy1.bounceOff(edges);
  enemy1.bounceOff(wall3);

  if(char.isTouching(enemy1)){
    respawn()
  }

  if(char.x == 650 && char.y == 155){
    key.x = 1000000000000000;
  }

  drawSprites();
}

function move(){
  if(keyDown(38)||keyDown(87)){
    char.y -=5;
  }
  if(keyDown(40)||keyDown(83)){
    char.y +=5;
  }
  if(keyDown(37)||keyDown(65)){
    char.x -=5;
  }
  if(keyDown(39)||keyDown(68)){
    char.x +=5;
  }
  //Character collides
  char.collide(wall1);
  char.collide(wall2_1);
  char.collide(wall3);
  char.collide(wall4);
  char.collide(wall5);
  char.collide(wall6_1);
  char.collide(wall6_2);
  char.collide(wall6_3);
  char.collide(wall7);
  char.collide(wall8);
  char.collide(wall9);

  if(char.x<10){
    char.x = 10
  }
  if(char.x>990){
    char.x = 990
  }
  if(char.y<10){
    char.y = 10
  }
  if(char.y>590){
    char.y = 590
  }

}

function respawn(){
  char.x = 200;
  char.y = 450;
}
