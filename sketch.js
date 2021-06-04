const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  // POLYGON
  ball = new polygon(200,200,20);



  //STAND 1  -START
  stand1 = new Stand(390,300,250,10);
  
  //BLOCKS    1~16                    (LEVEL~ 1,2,3 AND TOP.)
 
  //level one                            block 1~7
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //level two                            block 8~12
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40); 

  //level three                          block 13~15
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //top                                  block 16
  block16 = new Block(390,155,30,40);


  //STAND 1  -END     BY~ KIM TANVI



  //STAND 2  -START
  stand2 = new Stand(691,200,200,10);

  //BLOCKS    1~16                    (LEVEL~ 1,2 AND TOP.)

  //level one                            block 01~05                
  block01 = new Block(630,80,30,40);
  block02 = new Block(660,80,30,40);
  block03 = new Block(690,80,30,40);
  block04 = new Block(720,80,30,40);
  block05 = new Block(750,80,30,40);

  //level two                           block 06~08
  block06 = new Block(660,40,30,40);
  block07 = new Block(690,40,30,40);
  block08 = new Block(720,40,30,40);
 
  //level top                           block 09
  block09 = new Block(690,10,30,40);

  //STAND 2 -END      BY~ KIM TANVI

  // SLINGSHOT

  slingShot = new slingshot(ball.body,{x:200,y:200});


  

}
function draw() {


  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  
  strokeWeight(2);
  stroke(15);
  ball.display();
  

//STAND 1   -START

stand1.display();

  //BLOCKS    01~10                    (LEVEL~ 1,2,3 AND TOP.)  
  
  //level one                          block 1~7
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //level two                          block 8~12
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  //level three                        block 13~15
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  //top                                block 16
  fill("grey");
  block16.display();

  //STAND 1   -END





  //STAND 2   -START
  fill("brown");
   stand2.display();

  //BLOCKS    01~10                    (LEVEL~ 1,2,3 AND TOP.)  
  
  //level one                          block 01~05
  fill("skyBlue");
  block01.display();
  block02.display();
  block03.display();
  block04.display();
  block05.display();

  //level two                          block 06~08
  fill("turquoise")
  block06.display();
  block07.display();
  block08.display();

  //level top                          block 09
  fill("pink")
  block09.display();


  //STAND 2    ---END
  

 
 

}




function mouseDragged()
{
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   slingshot.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(ball.body,{x:100,y:200});
    slingshot.attach(ball.body);
  }
}
