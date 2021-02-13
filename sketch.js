var balloon, background;
function preload() {
  backgroundImg = loadImage("images/1.png.png");
  balloonImage = loadAnimation("images/2.png.png","images/3.png.png","images/4.png.png");
}



function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(800,400);
  balloon = createSprite(100,400,20,20)
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;


}

function draw() {
  background(backgroundImg);
  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
  }

 drawSprites();
}
 
function updateHeight(x,y){
database.ref('balloon/height').set({
  'x' : height.x + x ,
  'y' : height.y + y
})

}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
  console.log("Error in writing to the database");
}
