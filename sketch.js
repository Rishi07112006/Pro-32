const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, polygon_img;

var score = 0;

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

 
  ground1 = new Ground(400,390,1200,20);
  World.add(world,ground1);

  ground2 = new Ground(390,290,250,10)

  ground3 = new Ground(600,170,200,10)
  //first row
  box1 = new Box(300,275,30,40);
  //World.add(world,box1);
  //box1.shapeColor("white");
  box2 = new Box(330,275,30,40);
  //World.add(world,box2);
  //box2.shapeColor("white");
  box3 = new Box(360,275,30,40);
  //World.add(world,box3);
  //box3.shapeColor("white");
  box4 = new Box(390,275,30,40);
  //World.add(world,box4);
  //box4.shapeColor("white");
  box5 = new Box(420,275,30,40);
  //World.add(world,box5);
  //box5.shapeColor("white");
  box6 = new Box(450,275,30,40);
  //World.add(world,box6);
  //box6.shapeColor("white");
  box7 = new Box(480,275,30,40);
  //World.add(world,box7);
  //box7.shapeColor("white");
  //second row
  box8 = new Box(330,235,30,40);
  //World.add(world,box8);
  //box8.shapeColor("white");
  box9 = new Box(360,235,30,40);
  //World.add(world,box9);
  //box9.shapeColor("white");
  box10 = new Box(390,235,30,40);
 // World.add(world,box10);
  //box10.shapeColor("white");
  box11 = new Box(420,235,30,40);
  World.add(world,box11);
  //box11.shapeColor("white");
  box12 = new Box(450,235,30,40);
  //World.add(world,box12);
  //box12.shapeColor("white");
  //third row
  box13 = new Box(360,195,30,40);
  //World.add(world,box13);
  //box13.shapeColor("white");
  box14 = new Box(390,195,30,40);
  //World.add(world,box14);
  //box14.shapeColor("white");
  box15 = new Box(420,195,30,40);
 // World.add(world,box15);
  //box15.shapeColor("white");
  //top row
  box16 = new Box(390,155,30,40);
  //World.add(world,box16);
  //box16.shapeColor("white");

  box17 = new Box(540,140,30,40);
  box18 = new Box(570,140,30,40);
  box19 = new Box(600,140,30,40);
  box20 = new Box(630,140,30,40);
  box21 = new Box(660,140,30,40);
  box22 = new Box(570,100,30,40);
  box23 = new Box(600,100,30,40);
  box24 = new Box(630,100,30,40);
  box25 = new Box(600,60,30,40);

  polygon = Bodies.circle(50,200,20);

  //polygon.shapeColor = "yellow";
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:150,y:200});


}

function draw() {
  background(0);  
  Engine.update(engine);
  strokeWeight(2);
  //stroke("white");
  textSize(13);
  fill("red");
  text("Score : " + score, width-300, 50);
  //polygon.display();
 
  ground1.display();
  ground2.display();
  ground3.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();

  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();
  box25.display();
  box25.score();

  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
  slingShot.display();
  
  text("drag the line and release to hit the crazy boxes",600,250);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}