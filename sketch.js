
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1;
var ground;
var paper1;
var bin, BINi

function preload()
{
BINi=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

bin1 = new Bin(650, 470, 120, 20)
bin2 = new Bin(710, 420, 20, 180)
bin3 = new Bin(600, 420, 20, 180)
ground = new Ground(400, 490, 800, 20)
paper1 = new Paper(50, height-80, 30)

bin = createSprite(655, 395)
bin.addImage("bin", BINi)
bin.scale = 0.50

Slingshot= new Slingshot(paper1.body,{x:600, y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER)
  background("lightblue");
  
bin1.display();
bin2.display();
bin3.display();
ground.display();
paper1.display();
Slingshot.display();



  drawSprites();
 
}

function keyPressed(){
	if(keyDown("LEFT_ARROW")){
		Matter.body.x =  Matter.body.x+4 
	}
}

function mouseDragged(){

	Matter.Body.setPosition(paper1.body, {x:mouseX, y:mouseY})
	
	}
	
	function mouseReleased() {
	
	Slingshot.fly()
	
	}