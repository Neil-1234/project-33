const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg, walker, ground;
var ice=[];
var maxSnow=100;

function preload(){
bg = loadImage("snow2.jpg");
walker1 = loadImage("Project33.jpg");
//gimg=loadImage("ground.PNG");
}
function setup() {
  createCanvas(1200,600);

  //Engine.update(engine);
  //world = engine.world;
  //ground = createSprite(400, 590, 2000, 30);
  
  walker = createSprite(1150,450, 50,150);
  walker.addImage(walker1);
  walker.scale=0.2;
  walker.velocityX=-2;


 if(frameCount % 275 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }

}

function draw() {
  background(bg); 
 
  //walker.collide(sides)\

  if(walker.x > 1200){
    walker.x=150;
  }

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    



  drawSprites();
}
