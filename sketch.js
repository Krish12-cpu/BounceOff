var mrect
var frect
function setup() {
  createCanvas(800,400);
  mrect = createSprite(0,200,50,50)
  mrect.shapeColor = "blue"
  mrect.debug = true
  mrect.velocityX = 2
  frect = createSprite(800,200,50,50)
  frect.shapeColor = "blue"
  frect.debug = true
  frect.velocityX = -2

}

function draw() {
  background("black");  
  if(mrect.x-frect.x<mrect.width/2+frect.width/2&&
    frect.x-mrect.x<mrect.width/2+frect.width/2&&
    mrect.y-frect.y<mrect.height/2+frect.height/2&&
    frect.y-mrect.y<mrect.height/2+frect.height/2){
      mrect.shapeColor="yellow"
      frect.shapeColor = "yellow"
      mrect.velocityX = mrect.velocityX * -1
      frect.velocityX = frect.velocityX * -1
    }
  drawSprites();
}