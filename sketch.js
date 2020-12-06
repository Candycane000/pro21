var bullet,thickness;
var speed ,weight ;
function setup() {
  createCanvas(1600,400);
  speed = random(30,52);
  weight = random (223,321);
 thickness=random(22,83);

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed ; 
  bullet.shapeColor="white"
 
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  
}

function draw() {
  background("black");  
if(hasCollided(bullet,wall)){
bullet.velocityX=0
var damage = 0.5*speed*speed/(thickness*thickness*thickness)
if (damage>10){
  wall.shapeColor="red"
}
else{
  wall.shapeColor="yellow"
}
}

  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  else{
    return false
}
}