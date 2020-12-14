const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState="onsling"
var sling,s,g;
function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(800,800);
  stroke(255)
  s=new Striker(400,200,40,404)
  sling=new SlingShot(s,{x:400,y:400})
  g=new Ground(600,600,100,25)
}

function draw() {
  background(0);
  Engine.update(engine)
 s.display()
 sling.display()
 g.display()
}

function mouseDragged(){
  if (gameState==="onsling"){
  
      Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
  }
  }
  
  function mouseReleased(){
      slingshot.fly();
      gameState="launched"
  }
  
  function keyPressed(){
      if(keyCode === 32){
          slingshot.attach(striker.body);
      }
  }
