
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

let engine;
let world;

var groundObj;
var leftSide;
var rightSide;



function setup() {
	createCanvas(windowWidth, windowHeight);
	var ball_options = {
		isStatic : false,
		restitution: 0.001,
		friction: 0,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1000, 600, 20, 120);
	rightSide = new Ground (1300, 600, 20, 120);
	

	//Create the Bodies Here.
	ball = Bodies.circle(200, 100, 20, ball_options);
  World.add (world, ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}
function keyPressed(){
if (keyCode === RIGHT_ARROW){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:50., y:-60})
	}
}
