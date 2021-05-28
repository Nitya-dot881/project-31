const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300

function setup()
 {
  createCanvas(800,800)
  engine = Engine.create();
  world = engine.world;

  ground=new Ground (0, 800, 1600, 20);
   for(var k=0;k<=width;k=k+80)
   {
     divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
   }

   for(var j=40;j<=width;j=j+60){

    plinkos.push(new Plinkos(j,75,10));
   }
   for(var j=15;j<=width;j=j+60){

    plinkos.push(new Plinkos(j,175,10));
   } 
   for(var j=5;j<=width;j=j+60){

    plinkos.push(new Plinkos(j,275,10));
   }
   for(var j=5;j<=width;j=j+60){

    plinkos.push(new Plinkos(j,375,10));
   }
   
  
 
}

function draw() 
{
  background(0,0,0); 
  Engine.update(engine)
  ground.display();
  for(var m=0;m<plinkos.length;m++)
  {
    plinkos[m].display();
  }
  
   if(frameCount%60===0)
   {
    particles.push(new Particles(random(width/2-10,width/2+10),8,8))

   }
   for(var j=0;j<particles.length;j++)
   {
     particles[j].display();
   }
   for(var k=0;k<divisions.length;k++)
   {
     divisions[k].display();
   }
  drawSprites();
}