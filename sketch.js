const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

//var particles;

// function preload() {

// }

function setup() {
  createCanvas(480, 750);


  engine = Engine.create();
  world = engine.world;

  //Create a ground
  ground = new Ground(240, 745, width, 15);

  Engine.run(engine);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight))
  }

  for (var m = 40; m <= width; m = m + 50) {
    plinkos.push(new Plinko(m, 75, 10,10))
  }

  for (var m = 15; m <= width - 10; m = m + 50) {
    plinkos.push(new Plinko(m, 175, 10,10))
  }

  for (var m = 40; m <= width - 20; m = m + 50) {
    plinkos.push(new Plinko(m, 275, 10,10))
  }

  for (var m = 15; m <= width - 30; m = m + 50) {
    plinkos.push(new Plinko(m, 375, 10,10))
  }
}

function draw() {
  background(255, 243, 125);
  Engine.update(engine);
  ground.display();

  for (var m = 0; m < plinkos.length; m++) {
    plinkos[m].display()
  }
  if (frameCount % 20 === 0) {
    particles.push(new Particle(random(width / 2 - 100, width / 2 + 100), 10, 10));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display()
  }
  for (k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  
  

  

}
