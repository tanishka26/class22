const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground,box,ball;

function setup(){
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  box=Bodies.rectangle(100,200,50,50);
  World.add(world,box)
  var options={isStatic:true}
  ground=Bodies.rectangle(200,380,400,20,options);
  World.add(world,ground)

}

function draw(){
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
}