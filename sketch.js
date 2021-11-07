const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var engine,world;
var santa,santaImg,bgImg
var snows = []
var s1

function setup() {
  createCanvas(800,400);
  
engine = Engine.create()
world = engine.world


 s1 = new Snow(100,100,30,30),


 santa = createSprite(100, 280, 50, 50);
 santa.addAnimation("santa",santaImg);
 santa.scale = 0.5
 santa.velocityX = 1.2



}
function preload(){

santaImg = loadAnimation("santa1.png","santa2.png",'santa3.png')
bgImg=loadImage("bg.jpg")

}
function draw() {
  background(bgImg);  

  if(frameCount%60===0){
  snows.push(new Snow(random(0,600),30,30,30))
  }
  for (var i = 0; i <snows.length;i++){
    snows[i].display()
  }

 s1.display()
  drawSprites();
}