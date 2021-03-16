const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var background, backgroundImg;
var player,ball;
var engine,world;
var ballimg, ballimg1;
var ground;

function preload(){
backgroundImg= loadImage("images/Basketball court.jpg");
ballimg= loadImage("images/Ball3.png");
//ballimg1= loadImage("images/small ball.png");

}
function setup() {
  engine=Engine.create();
  world= engine.world; 
  createCanvas(2500,1000);
  player= new Player(500,800,20,20);
  player.scale= 0.4;
  //ball= new Ball(2000,800,30);
  ground= new Ground(1250,990,2500,10);
}

function draw() {
  background(backgroundImg);
  ground.display();
  player.display();
 
 if(frameCount % 100===0){
  ball= createSprite(random(2000,1500),random(700,500),20,20);
  ball.addImage("ball",ballimg);
  ball.velocityX=-20;
 // ball.display();
 // var rand = Math.round(random(1));
  //switch(rand){
    //case 1: ball.addImage("ball1",ballimg);
    //break;
  //}
 }
 drawSprites();
}

function keyPressed() {
if (keyCode === UP_ARROW) {
    console.log("hello");
    translation={x:0,y:-100};
    Matter.Body.translate(player.body,translation);

  } 
 else if(keyCode===DOWN_ARROW){
     translation={x:0,y:+50};
     Matter.Body.translate(player.body,translation);
  }
  else if(keyCode===LEFT_ARROW){
    translation={x:-50,y:0};
    Matter.Body.translate(player.body,translation);
  }
  else if(keyCode===RIGHT_ARROW){
    translation={x:+50,y:0};
   Matter.Body.translate(player.body,translation);
}
 }

function keyReleased() {
  
  if (keyCode === UP_ARROW) {
    console.log("hello");
    console.log("hi");
    translation={x:0,y:40};
    Matter.Body.translate(player.body,translation);

  } 
}
  