const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

  

  ground= Bodies.rectangle(300,490,300,50,object_options);
    World.add(world,ground);
box1=new Box(200,300,50,50)
box2=new Box(240,100,50,100)

   


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1000,20);
 box1.display()
 box2.display()
 
}
