const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = 0;

function preload()
{
    bg = loadImage("Images/background.png");
    Table1 = loadImage("Images/Table1.png");
}
function setup()
{
    createCanvas(600,600);


    engine = Engine.create();
	world = engine.world;

    bottle1 = new Bottle(100,270);

    ground1 = new Ground(100,480,100,150);
    ground2 = new Ground(300,480,100,150);

}

function draw()
{
    rectMode(CENTER);

    Engine.update(engine);

    if(gameState === 0)
    {
        background(bg);
    }

   
    
    ground1.display();
    ground2.display();
    bottle1.display();
    
    drawSprites();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        //bottle1.Bottle_rotate();
      //bottle1.body.angle = bottle1.body.angle + 10;
      Matter.Body.applyForce(bottle1.body,bottle1.body.position,{x:20, y: -50});
      //Matter.Body.rotate(bottle1.body,PI/7);
      //Matter.Body.setAngle(bottle1.body,PI/2);
      Matter.Body.rotate(bottle1.body, PI/6)
    }
}