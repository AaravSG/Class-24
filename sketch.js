const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;




function setup() {
  createCanvas(1200,400);


  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20)

  //layer 1
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810,320,50,50);

  //layer 2

  log1= new Log(810,290,300,PI/2);

  //layer 3
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810,240,50,50);

  //layer 4
  log2 = new Log(810,200,300,PI/2)

  //layer 5
  box5 = new Box(810,170,70,70);

  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/4);

//bird
 bird = new Bird(200,300,70,70);
  
}

function draw() {
  background(0); 

  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
}