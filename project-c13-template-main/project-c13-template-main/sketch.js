var garden,rabbit;
var gardenImg,rabbitImg;
var apple , leaf , orangeLeaf
var select_sprites = Math.round(random(1,3));
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
   
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  if (frameCount % 80 == 0){
    if(select_sprites == 1){
      createApples()
    }else if (select_sprites == 2){
      createOrangeLeafs()
    }else {
      createleafs()
    }
  }
}
rabbit.x = world.MouseX
function createApples(){
apple = createSprite(random(50, 350),40,10,10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
}
function createleafs(){
  leaf = createSprite(random(50, 350),40,10,10);
  leaf.addImage(redImg);
  leaf.scale=0.07;
  leaf.velocityY = 3;
  leaf.lifetime = 150;
  }
  function createOrangeLeafs(){
    orangeLeaf = createSprite(random(50, 350),40,10,10);
    orangeLeaf.addImage(orangeImg);
    orangeLeaf.scale=0.07;
    orangeLeaf.velocityY = 3;
    orangeLeaf.lifetime = 150;
    }
    