const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
var Ground1;

var engine,world;
function setup() {
  createCanvas(800,400);
 Ground1 = new Ground(80,456,99,80);
}

function draw() {
  background(255,255,255);  

  Ground1.display();
  
}