
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1=new Bob(460,300,70);
  bob2=new Bob(530,300,70);
  bob3=new Bob(600,300,70);
  bob4=new Bob(670,300,70);
  bob5=new Bob(740,300,70);
  roof1=new Roof(600,100,400,20);
 
  var options={
	  bodyA: bob1,
	  bodyB: roof1,
	  stiffness:0.04,
	  length:10
  }
  var chain = Constraint.create(options);
  World.add(world,chain);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  strokeWeight(3);
  line(bob1.body.position.x,bob1.body.position.y,roof1.body.position.x,roof1.body.position.y);
  drawSprites();
 
}



