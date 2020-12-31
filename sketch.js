const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var boy,boyImage,tree,ground,stone,sling,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12

function preload() {
  boyImage = loadImage("boy.png")
  bgImage = loadImage("background.jpg")
}

function setup() {
  createCanvas(1200,600)
 
  engine = Engine.create()
  world = engine.world
 
  tree = new Tree()
  ground = new Ground(600,590,1200,20)
  boy = Matter.Bodies.rectangle(320,510,10,10)
  stone = new Stone(150,300,20,20)
  sling = new SlingShot(stone.body,{x:237,y:439})
  mango1 = new Mango(950,200,25)
  mango2 = new Mango(870,120,25)
  mango3 = new Mango(1010,150,25)
  mango4 = new Mango(940,90,25)
  mango5 = new Mango(1060,180,25)
  mango6 = new Mango(870,200,25)
  mango7 = new Mango(780,255,25)
  mango8 = new Mango(785,180,25)
  mango9 = new Mango(1060,180,25)
  mango10 = new Mango(990,250,25)
  mango11 = new Mango(1110,245,25)
  mango12 = new Mango(705,220,25)
}

function draw() {

  background(bgImage)

  Engine.update(engine)
 
  tree.display()
  ground.display()
  imageMode(CENTER)
  image(boyImage,boy.position.x,boy.position.y,200,300)
  sling.display()
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  mango12.display()
  
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)
  detectCollision(stone,mango11)
  detectCollision(stone,mango12)

  fill("black")
  stroke("#66ca06")
  strokeWeight(1)
  textSize(25)
  text("Press Space To Get A Second Chance To Play!",40,40)
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  sling.fly()
}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(stone.body,{x:150,y:300})
    sling.attacher(stone.body)
  }
}

function detectCollision(lstone,lmango) {
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position
  
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r) {
    Matter.Body.setStatic(lmango.body,false)
  } 
}