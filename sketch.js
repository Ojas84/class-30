
var player;
var score=0;
var wormGroup;

function preload(){
  bgImage=loadImage("images/swampImg.png");
  playerImage=loadImage("images/frog.png");
  wormImage=loadImage("images/worm.png");
}
function setup() {
createCanvas(1000,600);
bg=createSprite(500,300)
bg.addImage(bgImage)
bg.scale=4.5;
player = createSprite(40,550,30,30); 
player.addImage(playerImage);
player.scale=0.5;
wormGroup= new Group();
}

function draw() {
 
stroke("white")

player.x= mouseX;
player.y= mouseY;


generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,50);
}

function generateWorms(){
if(frameCount % 30===0){
  console.log(frameCount);
  var worm = createSprite(100,350,40,5);
  worm.addImage(wormImage)
  worm.scale=random(0.2,0.6);
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
  wormGroup.add(worm);
  }
}
