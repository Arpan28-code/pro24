
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var D1;
function preload()
{
 	
}

function setup() 
{
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
	D1= new Dustbin(600,580,200,20);
	D2=new Dustbin(500,515,20,150);
    D3=new Dustbin(700,515,20,150);

   
	paper= new Paper (100,500,50);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);

  
  
  drawSprites();
 paper.display();
 ground.display();
 D1.display();
 D2.display();
 D3.display();
}

function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-400});

	}
}

