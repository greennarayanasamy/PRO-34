var Engine = Matter.Engine,
World= Matter.World,
Bodies = Matter.Bodies,
Constraint = Matter.Constraint,
MouseConstraint = Matter.MouseConstraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;

function preload(){
 
}
function setup() {
  canvas = createCanvas(windowWidth/2,windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasemouse
  };
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  bob1 = new Pendulum();
}
function draw() {
  background(0);

  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(pendulum1.body,{ x: mouseX, y: mouseY});
}





