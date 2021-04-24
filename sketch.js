const eng = Matter.Engine;
const wor = Matter.World;
const body = Matter.Bodies;

var engine,world;
var ground,ball;





function setup() {
  createCanvas(400,400);

  engine = eng.create();
  world = engine.world;

  var groundoptions = {

    isStatic: true
  }

  ground = body.rectangle(200,380,400,20,groundoptions);
  wor.add(world,ground)

  var balloptions = {

    restitution: 1.0
  }

  ball = body.circle(200,100,40,balloptions);
  wor.add(world,ball)
}

function draw() {
  background("black");  

  eng.update(engine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,40);
  drawSprites();
}