
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var wedge;
var angle=0.01 ;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  
  var ops={
    isStatic:true
  };

  wedge = Bodies.rectangle(100,200,100,20,ops);
  World.add(world,wedge);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);

  var render = Matter.Render.create({
        element:document.body,
        engine:engine,
        options: {
            width:400,
            height:400,
            wireframes:false
        }
    });
    Matter.Render.run(render);
}


function draw() {
  background(51);
  Engine.update(engine);
 
  Matter.Body.rotate(wedge,angle)
    
  push();
  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
 
}