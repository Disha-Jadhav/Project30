const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box11, box12, box13, box21, box22, box31;
var ground1;

function setup()
{
    createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;
 
    ground1 = new ground(600, 680, 1200, 50);
    ground2 = new ground(800, 670, 600, 200);

    box1 = new box(700, 600, 100, 100);
    box2 = new box(800, 600, 100, 100);
    box3 = new box(900, 600, 100, 100);
    
    box11 = new box(750, 550, 100, 100);
    box12 = new box(850, 550, 100, 100);

    box21 = new box(800, 400, 100, 100);
    
    polygon1 = new polygon(150, 650, 6, 100);

    rope1 = new rope(polygon1.body, {x: 150, y: 450});
}

function draw()
{
    background(0);
    Engine.update(engine);

    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
  
    box11.display();
    box12.display();
   
    box21.display();
  
    polygon1.display();

    rope1.display();

    drawSprites();
}
function mouseDragged()
{
	Matter.Body.setPosition(polygon1.body, {x: mouseX, y: mouseY});
}
function mouseReleased()
{
	rope1.fly();
}
function keyPressed()
{
    if(keyCode === 32)
    {
        rope1.attach(polygon1.body);
    }
}