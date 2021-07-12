var iss_Img, spaceCraft1_Img, spaceCraft2_Img, spaceCraft3_Img, spaceCraft4_Img;
var back_Img, spaceCraft;
var hasDocked = false;

function preload(){
back_Img = loadImage("images/spacebg.jpg");
spaceCraft1_Img = loadImage("images/spacecraft1.png");
spaceCraft2_Img = loadImage("images/spacecraft2.png");
spaceCraft3_Img = loadImage("images/spacecraft3.png");
spaceCraft4_Img = loadImage("images/spacecraft4.png");
iss_Img = loadImage("images/iss.png");

}



function setup() {
  createCanvas(800,450);
  iss = createSprite(430, 230);
  iss.addImage(iss_Img);
  iss.scale = 0.85;
  
  spaceCraft = createSprite(515,340);
  spaceCraft.addImage(spaceCraft1_Img);
  spaceCraft.scale = 0.20;

}

function draw() {
  background(back_Img);  

  if(!hasDocked){
   spaceCraft.x = spaceCraft.x + random(-1,1);


   if (keyDown(RIGHT_ARROW)) {
     spaceCraft.addImage(spaceCraft4_Img);
      spaceCraft.x = spaceCraft.x+ 1;
  }
  
  if (keyDown(LEFT_ARROW)) {
    spaceCraft.addImage(spaceCraft3_Img);
    spaceCraft.x = spaceCraft.x-1;
  }
  if(keyDown(UP_ARROW)){
    spaceCraft.y = spaceCraft.y-1;
  }

  if(keyDown(DOWN_ARROW)){
    spaceCraft.addImage(spaceCraft2_Img);
  }


  }
  
  if(spaceCraft.x <= (iss.x-7) && spaceCraft.y <= (iss.y+98)){
    hasDocked = true;
    textSize(30);
    fill("white");
    text("Docking Successful",500,400);
  }

  console.log(spaceCraft.x+"=spX");
  console.log(spaceCraft.y+"=spY");
  
  drawSprites();
}