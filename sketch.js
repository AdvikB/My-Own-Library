var fixRect, movingRect, gameObject1, gameObject2


function setup() {
  createCanvas(800,400);
  fixRect = createSprite(400, 200, 50, 50);
  fixRect.shapeColor = "blue";
  movingRect = createSprite(500,200,50,80);
  movingRect.shapeColor = "blue";
  gameObject1 = createSprite(140,50,50,50);
  gameObject1.shapeColor = "blue";
  gameObject2 = createSprite(600,60,50,50);
  gameObject2.shapeColor = "blue";
}

function draw() {
  background(0); 
   console.log("diff :" + (fixRect.x-movingRect.x));
   console.log(movingRect.width/2+fixRect.width/2);
  movingRect.x = mouseX;
  movingRect.y = mouseY;
 
  if(isCollided(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }

  
  else if(isCollided(movingRect,gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }

  else{
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  
  drawSprites();
  fill("white");
  text(mouseX+","+mouseY,mouseX,mouseY);
}