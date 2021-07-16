
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
let ball2;
var ground;
var lwall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  };

  var ball2_options = {
    restitution: 0.75,
    frictionAir: 0.00001
  };
   
   var ground_options ={
     isStatic: true
   };

   var lwall_options = {
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  lWall = Bodies.rectangle(390,200,20,400,lwall_options);
  World.add(world,lwall);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(100,10,50,ball2_options);
  World.add(world,ball2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,50);
  rect(ground.position.x,ground.position.y,400,20);
  rect(lWall.position.x,lWall.position.y,20,400);
 
}

