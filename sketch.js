const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

var stand, stand2, block1, block2, constraint;

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

   //fontColor(255,255,255)
  

  stand = new Stand (400,350);
  stand2 = new Stand (700,200);
  block1 = new Block(315,335);
  block2 = new Block(315+ 20, 335);
  block3 = new Block(315 + 20*2, 335);
  block4 = new Block(315 + 20*3, 335);
  block5 = new Block(315 + 20*4, 335);
  block6 = new Block(315+20*5, 335);
  block7 = new Block(315+20*6, 335);
  block8 = new Block(315+20*7, 335);
  block9 = new Block(315+20*8, 335);

  block10 = new Block(315+20, 305);
  block11 = new Block(315 +20*2,305);
  block12 = new Block(315+ 20*3, 305);
  block13 = new Block(315 + 20*4, 305);
  block14 = new Block(315 + 20*5, 305);
  block15 = new Block(315 + 20*6, 305);
  block16 = new Block(315+20*7, 305);

  block17 = new Block(315 + 20*2, 275);
  block18 = new Block(315+20*3, 275);
  block19 = new Block(315+20*4, 275);
  block20 = new Block(315 + 20*5, 275);
  block21 = new Block(315+20*6, 275);

  block22 = new Block(315 + 20*3, 245);
  block23 = new Block(315+20*4, 245);
  block24 = new Block(315+20*5, 245);

  block25 = new Block(315 + 20*4);

  block26 = new Block(700,185);
  block27 = new Block(700-20,185);
  block28 = new Block(700+20,185);
  block29 = new Block(700-20*2,185);
  block30 = new Block(700+20*2,185);
  block31 = new Block(700-20*3,185);
  block32 = new Block(700+20*3,185);

  block33 = new Block(700,155);
  block34 = new Block(700-20,155);
  block35 = new Block(700+20,155);
  block36 = new Block(700-20*2,155);
  block37 = new Block(700+20*2,155);

  block38 = new Block(700,125);
  block39 = new Block(700-20,125);
  block40 = new Block(700+20,125);

  block41 = new Block(700,95);

 ground = new Ground(500,395,1000,10);

  strike = new Striker(100,200);

  constraint = new Rope(strike.body,{x: 100, y: 180});

}

function draw() {
  background(96,64,38);  
  
 
  Engine.update(engine);
   
  textSize(30);
  text ("Press Space bar to get another chance",200,30);
  text ("Reload page to restart game",200,70)


  block1.display(68,85,90);
  block2.display(68,85,90);
  block3.display(68,85,90);
  block4.display(68,85,90);
  block5.display(68,85,90);
  block6.display(68,85,90);
  block7.display(68,85,90);
  block8.display(68,85,90);
  block9.display(68,85,90);

  block10.display(173, 188, 230);
  block11.display(173, 188, 230);
  block12.display(173, 188, 230);
  block13.display(173, 188, 230);
  block14.display(173, 188, 230);
  block15.display(173, 188, 230);
  block16.display(173, 188, 230);

  block17.display(230,173,216);
  block18.display(230,173,216);
  block19.display(230,173,216);
  block20.display(230,173,216);
  block21.display(230,173,216);

  block22.display(230,173,288);
  block23.display(230,173,288);
  block24.display(230,173,288);

  block25.display(215,230,187,173);


  block26.display(56,93,56);
  block27.display(56,93,56);
  block28.display(56,93,56);
  block29.display(56,93,56);
  block30.display(56,93,56);
  block31.display(56,93,56);
  block32.display(56,93,56);

  block33.display(100,23,100);
  block34.display(100,23,100);
  block35.display(100,23,100);
  block36.display(100,23,100);
  block37.display(100,23,100);

  block38.display(173,230,216);
  block39.display(173,230,216);
  block40.display(173,230,216);

  block41.display(173,230,187);
  
  stand.display(200);
  stand2.display(160);
  strike.display();
  constraint.display();

  ground.display()
  
 drawSprites()

 

  
 if(keyWentDown('space')){


  strike=new Striker(100,200);

  constraint = new Rope (strike.body, {x: 100, y: 180} );

  
}

//console.log(strike.body.position.x,strike.body.position.y )

}

function mouseDragged(){
  if (strike.body.position.y >= 185 && strike.body.position.y <= 210  ){
  Matter.Body.setPosition(strike.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  constraint.fly();
}

