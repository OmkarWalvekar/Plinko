const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var bar1,bar2,bar3,bar4,bar5,bar6;
var plinko;

function setup() {
  createCanvas(480,480);
  engine = Engine.create();
  world = engine.world;

  bar1 = new Division(10,380,10,150);
  bar2 = new Division(110,380,10,150);
  bar3 = new Division(200,380,10,150);
  bar4 = new Division(290,380,10,150);
  bar5 = new Division(380,380,10,150);
  bar6 = new Division(470,380,10,150);



  ground = new Ground(100,460,800,20);
}

function draw() {
  background("black"); 
  
  bar1.display();
  bar2.display();
  bar3.display();
  bar4.display();
  bar5.display();
  bar6.display();

  plinko.display();

  ground.display();

  drawSprites();
}