var mouse,mouse_stop,mouse_move;
var cat,cat_stop,cat_move;
var garden,gardenIMG;

function preload() {
    //load the images here
    mouse_move= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse_stop = loadAnimation("images/mouse1.png");
    mousestopIMG = loadAnimation("images/mouse4.png");

    cat_move= loadAnimation("images/cat3.png","images/cat2.png");
    cat_stop = loadAnimation("images/cat1.png");
    catstopIMG = loadAnimation("images/cat4.png");
    gardenIMG = loadAnimation("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and mouse sprites here
    
   garden = createSprite(500,400,1000,1000);
   garden.addAnimation("forest", gardenIMG);
   
   mouse = createSprite(80,600, 20, 20); 
   mouse.addAnimation("sitting", mouse_stop);
   mouse.scale = 0.1;
  
   cat = createSprite(780,600, 20, 20);
   cat.addAnimation("sit", cat_stop);
   cat.scale = 0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and mouse collide

    if(cat.x-mouse.x<cat.width/2-mouse.width/2){

    cat.velocityX=0;
    cat.x=140;
    cat.addAnimation("stop",catstopIMG);
    cat.changeAnimation("stop" );
    mouse.addAnimation("stoping",mousestopIMG);
    mouse.changeAnimation("stoping" );
    

    }

    
      
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
  
  
  cat.velocityX=-5;
  cat.addAnimation("move",cat_move );
  cat.changeAnimation("move" );
  mouse.addAnimation("moving",mouse_move );
  mouse.changeAnimation("moving" );
  }

}




