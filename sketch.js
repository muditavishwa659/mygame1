var bg,backimg;


function preload(){
  backimg = loadImage('gameimg/background.jpg');
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2,windowHeight/2,50,50);
  bg.addImage(backimg)
  bg.scale = 2;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}