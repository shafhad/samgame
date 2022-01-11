var jungleimg,player,goldimg
var parachuteimg,snakeimg,giraffee1img;
var playerimg, giraffeimg, queImg;
var playerthinkingimg, chance;
var elephantimg, monsterimg;
var gameState = "level1";
var key,teacher,next, keyimg,teacher1img;
var timer, mathsScore = 0,scienceScore = 0;
var keysound,timersound,mathslevel,science;
var ss = 45,mm = 45;
var key2,button,timer;

function preload(){
  jungleimg = loadImage("jungle1.jpg")
  jungle1img = loadImage("jungle4.jpg")
 // goldimg = loadImage("gold.gif")
   parachuteimg = loadImage("parachute.png")
  snakeimg = loadImage("snake-unscreen.gif")
  playerimg = loadImage("player.png")
 // giraffeimg = loadImage("giraffee obstacle.gif")
  queImg = loadImage("question.png")
 // giraffee1img = loadImage("giraffblack.png")
  playerthinkingimg = loadImage("playerthinking.png")
  monsterimg = loadImage("monster-unscreen.gif");
  monster2img = loadImage("monster2.gif")
  textboximg = loadImage("maths.png")
  timerimg = loadImage("clock.png");
  //timersound = loadSound("images/clock1.mp3");
  keyimg = loadImage("key.png");
  teacher1img = loadImage("teacher-removebg-preview.png");
  jungle2img = loadImage("jungle3.jpg");
  jungle3img = loadImage("jungle5.jpg")
  jungle2img.scale = 1.3;
keysound = loadSound("key received.wav")
//timersound =loadSound("images/questiontimer.mp3")
mathslevelsound = loadSound("complete.wav")
//sciencesound = loadSound("new level(2).wav");
key2 = loadImage("key2.png")
dashboard = loadImage("dashboard.jpg");


}

function setup() {
  createCanvas(windowWidth, windowHeight);

  parachute = createSprite(windowWidth-1700,windowHeight-330,20,60)
  parachute.addImage('para',parachuteimg)
  player = createSprite(windowWidth-1700,windowHeight-250,20,60)
  player.addImage('walking',playerimg);
  player.scale = 1.1;
  textbox = createSprite(windowWidth-850,windowHeight-410,100,170);
  textbox.addImage('mathslevel',textboximg)
 
  textbox.scale = 0.3;

 
  obstacle = new Obstacle(windowWidth-850,windowHeight-210,100,170);
  //obstacle2 = new Obstacle(windowWidth-400,windowHeight-70,100,170);
  question = createSprite(windowWidth-970,windowHeight-80,100,170)
  question.scale = 0.2;
  question.visible = false;
  timer = createSprite(windowWidth - 470,windowHeight-380,50,50)
  teacher = createSprite(windowWidth-1050,windowHeight+150)
  teacher.addImage('teacher',teacher1img)
  teacher.visible = false;
  teacher.scale = 0.6;

  button = createSprite(windowWidth-470,windowHeight/2+495, 250,50);
  button.shapeColor = "white";
  button.visible = false;

 

  next = createSprite(windowWidth-930,windowHeight/2+545, 120,50);
  next.shapeColor = "orange";
  next.visible = false;

  timer.addImage('clock',timerimg)
  timer.scale = 0.2;
  timer.visible = false;
}

function draw() {
  background(0);
 
  if(gameState === "level1"){
    image(jungle1img,-windowWidth/2-450,windowHeight/2-520,windowWidth*1.5,windowHeight*1.5)
    
  
   
    drawSprites();
    textSize(24)
   // textbox.visible = "false";
    fill("black")
   text("maths level",windowWidth - 910,windowHeight-400)
  if(keyDown("right")){
    player.x=10+player.x
    }
    if(keyDown("right")){
      parachute.x=10+player.x
      }

  if(player.isTouching(obstacle.ob)){
    //  obstacle.ob.addImage(giraffeimg)
     // obstacle.ob.scale = 0.5;
     keysound.play();
      gameState = "question1"
    }
    camera.position.y = player.y;
  camera.position.x = player.x;
  }
  else if (gameState === "question1"){
    //image(jungleimg,-windowWidth/2,windowHeight/2-300,windowWidth*1.5,windowHeight*1.5)
    
    drawSprites();
  fill("red");
  textSize(20)
    //timersound.play();
    //mathslevelsound.play();
    text("maths Score: "+ mathsScore,windowWidth - 700,windowHeight-389)
    fill("black");
    text(" "+ss,windowWidth - 495,windowHeight-360)

    
    if(frameCount%60 === 0){
      ss=ss-1;
      

    }

    if(ss === 30){
      gameState = "question2"
    }
    question.visible = true;
   //timersound.play();
   //timersound.setVolume(0.5);
    timer.visible = true;
    
    question.x = windowWidth/2-130;
    question.y = windowHeight-245;
    question.addImage(queImg);
    question.scale = 1.5; 
   // player.changeAnimation('walking',playerthinkingimg);
   player.x =windowWidth/2-700;
   player.y =windowHeight-200;
   textSize(30)
   text("if a zebra has 50 stripes & a tiger has 60 stripes ", windowWidth/2-470, windowHeight-300)
   text("how many black stripes are there altogethere if ", windowWidth/2-470, windowHeight-200)
   fill("black");
   text("there are 2 tigers & 5 zebras?", windowWidth/2-470, windowHeight-100)
  // text("Answer",windowWidth/2-200, windowHeight+50)
   obstacle.ans.position(windowWidth-610, windowHeight-90)
   obstacle.go.position(windowWidth-450, windowHeight-90)
    chance = obstacle.ans.value();
    console.log(chance);
   obstacle.go.mousePressed(() => {
    console.log(chance);
   
   //num = chance.localeCompare("370")
   //console.log(num)

    if(chance.localeCompare("370") === 0){
     mathsScore = mathsScore  + 10;
      gameState= "question2";
      
    }
    else if (chance.localeCompare("370") != 0) {
      // code for wrong answer
      mathsScore = mathsScore;
      gameState = "question2"
    }
   });
  
  }
  
  else if (gameState === "question2"){
    //image(jungleimg,-windowWidth/2,windowHeight/2-300,windowWidth*1.5,windowHeight*1.5)
    drawSprites();
  fill("red");
  textSize(20)
    
    text("maths Score: "+ mathsScore,windowWidth - 700,windowHeight-389)
    fill("black");
    text(" "+ss,windowWidth - 495,windowHeight-360)

    if(frameCount%60 === 0){
      ss=ss-1;
    }
    if(ss === 15){
      ss =fill("red")
      gameState = "question3"
      
    }
    question.visible = true;
    timer.visible = true;
    question.x = windowWidth/2-130;
    question.y = windowHeight-245;
    question.addImage(queImg);
    question.scale = 1.5; 
   // player.changeAnimation('walking',playerthinkingimg);
   player.x =windowWidth/2-600;
   textSize(35)
   text("how many legs does 4 cockroach has ", windowWidth/2-400, windowHeight-250)
   text(" altogether?", windowWidth/2-400, windowHeight-150)
   //text("altogether?", windowWidth/2-300, windowHeight-50)
   fill("brown");
  // text("Answer",windowWidth/2-200, windowHeight+50)
   obstacle.ans.position(windowWidth-610, windowHeight-90)
   obstacle.go.position(windowWidth-450, windowHeight-90)
    chance = obstacle.ans.value();
    console.log(chance);
   obstacle.go.mousePressed(() => {
    console.log(chance);
   
  // num = chance.localeCompare("24")
  // console.log(num)

    if(chance.localeCompare("24") === 0){
      mathsScore = mathsScore  + 10;
      gameState = "question3";
      
    }
    else if (chance.localeCompare("24") != 0) {
      // code for wrong answer
      mathsScore = mathsScore;
      gameState = "question3"
    }
   });
  
  }

  else if (gameState === "question3"){
    //image(jungleimg,-windowWidth/2,windowHeight/2-300,windowWidth*1.5,windowHeight*1.5)
    drawSprites();
  fill("red");
  textSize(20)
  
   
    text("maths Score: "+ mathsScore,windowWidth - 700,windowHeight-389)
    fill("black");
    text(" "+ss,windowWidth - 495,windowHeight-360)

    if(frameCount%60 === 0){
      ss=ss-1;
    }
    if(ss === 0){
      gameState = "wow"
      fill("black")
    }
    question.visible = true;
    timer.visible = true;
    question.x = windowWidth/2-130;
    question.y = windowHeight-245;
    question.addImage(queImg);
    question.scale = 1.5;  
   // player.changeAnimation('walking',playerthinkingimg);
   player.x =windowWidth/2-600;
   textSize(30)
   text("A fly lays her eggs in 3 equal batches.if the", windowWidth/2-470, windowHeight-300)
   text(" fly lays 400 eggs altogether in the first two  ", windowWidth/2-470, windowHeight-200)
   text("batches ,the how many eggs did the flay lay in total?", windowWidth/2-470, windowHeight-100)
   fill("brown");


  // text("Answer",windowWidth/2-200, windowHeight+50)
   obstacle.ans.position(windowWidth-610, windowHeight-90)
   obstacle.go.position(windowWidth-450, windowHeight-90)
    chance = obstacle.ans.value();
    console.log(chance);
   obstacle.go.mousePressed(() => {
    console.log(chance);
   
   //num = chance.localeCompare("giraffe")
   
    if(chance.localeCompare("600") === 0){
      mathsScore = mathsScore  + 10;
      gameState = "wow";
    }
      else if (chance.localeCompare("600") != 0) {
        // code for wrong answer
  mathsScore = mathsScore;
        gameState = "wow"
      }
     });
    
    }
    
 else if (gameState === "wow") {  
   

  //key = createSprite(windowWidth-1050, windowHeight/2+580);
 //key.addImage('key',keyimg);
 // key.scale = 0.4;
 

  timer.visible = false;
 parachute.visible = false;
 textbox.visible = false;
 //key.visible = true;

  image(jungle2img,-windowWidth/2,windowHeight/2-200,windowWidth*1.5,windowHeight*1.5)
 
  //player = createSprite(windowWidth-1300,windowHeight-50,20,60)
 // player.x = windowWidth-1400
  player.y = windowHeight/2+420
  //text("collect the key",displaywidth-500, windowHeight/2+300)
  //var text = createSprite(windowWidth-980, windowHeight/2+500 ,60,30)
  //text.shapeColor("white")
  textSize(40)
  fill("black")
  text("collect the key",windowWidth-980,windowHeight/2+530)
 

  obstacle.ans.hide();
  obstacle.go.hide();
  question.visible = false;
 obstacle.ob.visible = false;


  
camera.position.y = player.y;
camera.position.x = player.x;

  if(keyDown("right")){
    player.x=5+player.x
    }

  keylock();
 
   

  
   
  drawSprites();
 }
 
 else if(gameState === "wow2"){
  timer.visible = false;
  parachute.visible = false;
  textbox.visible = false;
  //key.visible = true;
 
   image(jungle2img,-windowWidth/2,windowHeight/2-200,windowWidth*1.5,windowHeight*1.5)
  
   //player = createSprite(windowWidth-1300,windowHeight-50,20,60)
  // player.x = windowWidth-1400
   player.y = windowHeight/2+420
   //text("collect the key",displaywidth-500, windowHeight/2+300)
   //var text = createSprite(windowWidth-980, windowHeight/2+500 ,60,30)
   //text.shapeColor("white")
   textSize(40)
   fill("black")
   text("collect the key",windowWidth-980,windowHeight/2+530)
  
 
   obstacle.ans.hide();
   obstacle.go.hide();
   question.visible = false;
  obstacle.ob.visible = false;
 
 
   
 camera.position.y = player.y;
 camera.position.x = player.x;
 
   if(keyDown("right")){
     player.x=5+player.x
     }
 
   keylock();
  
    
 
   
    
   drawSprites();
  }

else if (gameState === "next"){
 
  textSize(30);
  fill("black");
 //mathslevelsound.play();
  player.x = windowWidth-1400
  next.visible = true;
  
  keylock();
  //key.visible = true;
 teacher.visible = true;
 image(jungle3img,-windowWidth/2,windowHeight/2-150,windowWidth*1.5,windowHeight*1.5)

 //next = createSprite(windowWidth-1050,windowHeight/2+650, 120,50);
 //next.shapeColor = "green";
  
 // next.debug = true;
  if(mousePressedOver(next)){
    //teacher.visible = false;
    
    next.visible = false;
    gameState = "level2";
    
  }
  drawSprites();
  text("NEXT",windowWidth-970,windowHeight/2+555)
  textSize(35)
  text("Congratulations!Level complete!!!", windowWidth-1250,windowHeight+325)
}


 
 
   else if ( gameState === "level2"){
   
   // 1. image
   // 2. player moving
   //3. obstacle 
  
   drawSprites();

 image(jungleimg,-windowWidth/2,windowHeight/2-100,windowWidth*1.5,windowHeight*1.5)
 obstacle.ob.visible = true;
 //removeItem('key');
//var ss = 45;
 //teacher.y = windowHeight-90
 teacher.visible = false;
 textbox.visible = true;
// textSize(30)
 //text("science level",windowWidth-300,windowHeight+100)
//sciencesound.play();
// key.x = windowWidth/4
 next.visible = false;
 timer.visible = false;
 

   // player.x = windowWidth-2000;
    player.y = windowHeight+100;
    
    
    obstacle.ob.x  = windowWidth-470;
    obstacle.ob.y = windowHeight+100;

    if(keyDown("right")){
      player.x=8+player.x
      } 

      camera.position.y = player.y;
      camera.position.x = player.x;
     
    drawSprites();

    if(player.isTouching(obstacle.ob)){
        gameState = "question4"
        keysound.play();
        
      }
      camera.position.y = player.y;
      camera.position.x = player.x;
     
  }

  else if (gameState === "question4"){
    //image(jungleimg,-windowWidth/2,windowHeight/2-300,windowWidth*1.5,windowHeight*1.5)
    
    
    drawSprites();
    textSize(20)
    fill("red")
    text("Science Score: "+ scienceScore,windowWidth - 700,windowHeight-159)
    fill("black");
    text(" "+mm,windowWidth - 415,windowHeight-110)

   
    
    textSize(35)
    text("which animal has 3 hearts? ", windowWidth-1000, windowHeight-100)

    
   

    if(frameCount%60 === 0){
      mm=mm-1;
    }
    //if(mm === 30){
      //gameState = "question5"
   // }
    question.visible = true;
    
    timer.x = windowWidth-400
timer.y = windowHeight-120
    timer.visible = true;
    question.x = windowWidth/2
    question.y = windowHeight+50;
    question.addImage(queImg);
    question.scale = 1.6; 
   // player.changeAnimation('walking',playerthinkingimg);
  

   player.x =windowWidth/2-600;
   player.y =windowHeight-30;
  
   obstacle.ans.show();
   obstacle.go.show();
   obstacle.ans.position(windowWidth/2, windowHeight-350)
   obstacle.go.position(windowWidth/2+200, windowHeight-350)
   
   
    chance = obstacle.ans.value();
  
    
   obstacle.go.mousePressed(() => {
  

    if(chance.localeCompare("octabus") === 0){
     scienceScore = scienceScore + 10;
      gameState = "question5";
      
    }
    else if (chance.localeCompare("octabus") != 0) {
 scienceScore =scienceScore;
      gameState = "question5"
    }
   });
  
  }
  

  


 else if (gameState === "question5"){

  
 drawSprites();
 textSize(35)

  fill("red");
  textSize(20)
   // drawSprites();
    text("Science Score: "+ scienceScore,windowWidth - 700,windowHeight-159)
    fill("black");
    text(" "+mm,windowWidth - 415,windowHeight-110);


     
    if(frameCount%60 === 0){
      mm=mm-1;
    }
   if(mm === 15){
      gameState = "questionlast"
      fill("red")
    }
    question.visible = true;
    timer.visible = true;

    //textSize(35)
    //text("which animal is fastest animal", windowWidth-900, windowHeight-100)
    //text(" on land?", windowWidth-900, windowHeight-60)

    question.x = windowWidth/2
    question.y = windowHeight+50;
    question.addImage(queImg);
    question.scale = 1.6; 
   // player.changeAnimation('walking',playerthinkingimg);
   player.x =windowWidth/2-600;
   player.y =windowHeight-30;
   
   textSize(35)
   text("which animal is fastest animal", windowWidth-1000, windowHeight-100)
       text(" on land?", windowWidth-900, windowHeight-60)
      
   //text("altogether?", windowWidth/2-300, windowHeight-50)
   
  // text("Answer",windowWidth/2-200, windowHeight+50)
  obstacle.ans.show();
   obstacle.go.show();
   obstacle.ans.position(windowWidth/2, windowHeight-350)
   obstacle.go.position(windowWidth/2+200, windowHeight-350)
    chance = obstacle.ans.value();
    console.log(chance);
   
  
  obstacle.go.mousePressed(() => {
  
console.log("obstacle.go")
    if(chance.localeCompare("cheetah") === 0){
     scienceScore = scienceScore + 10;
      gameState = "questionlast";
      
    }
    else if (chance.localeCompare("cheetah") != 0) {
 scienceScore = scienceScore;
      gameState = "questionlast"
    }
   });

 }
  
  else if (gameState === "questionlast"){
    
 drawSprites();
 
    fill("red");
   
    textSize(20)
      drawSprites();
      text("Science Score: "+ scienceScore,windowWidth - 700,windowHeight-159)
      fill("black");
      text(" "+mm,windowWidth - 415,windowHeight-110)
  
      textSize(35)
      text("how many legs does an ", windowWidth-1000, windowHeight-100)
      text(" octabus have? ", windowWidth-900, windowHeight-60)
      if(frameCount%60 === 0){
        mm=mm-1;
     }
      if(mm === 0){
        gameState = "dashboard"
      }
      question.visible = true;
      timer.visible = true;

      textSize(25)
      text("COLLECT THE KEY2",windowWidth-595,windowHeight/2+505)

       button.visible = "true"
    
     if(mousePressedOver(button)){
      // button.visible = false;
       gameState = "dashboard";
     
      }

      question.x = windowWidth/2
    question.y = windowHeight+50;
    question.addImage(queImg);
    question.scale = 1.6; 
     // player.changeAnimation('walking',playerthinkingimg);
     player.x =windowWidth/2-600;
   player.y =windowHeight-50;
   
    
    // text("Answer",windowWidth/2-200, windowHeight+50)
    obstacle.ans.show();
    obstacle.go.show();
    obstacle.ans.position(windowWidth/2, windowHeight-350)
    obstacle.go.position(windowWidth/2+200, windowHeight-350)
      chance = obstacle.ans.value();
      console.log(chance);
     obstacle.go.mousePressed(() => {
      console.log(chance);

      obstacle.ans.hide();
      
      if(chance.localeCompare("8") === 0){
        scienceScore = scienceScore + 10;

      
       
        
     }
      else if (chance.localeCompare("8") != 0) {
        // code for wrong answer
        scienceScore = scienceScore;

        
      
    }
          

    
    

 
     });
    
  }

  else  if(gameState === "dashboard"){







image(dashboard,windowWidth/2-700,windowHeight/2-10,windowWidth*1.3,windowHeight*1.3)


obstacle.ans.hide();
obstacle.go.hide();

textSize(30)
fill("black");
text("dashboard:", windowWidth-600, windowHeight-50)
text("maths score = "+mathsScore, windowWidth-800,windowHeight-20)
text("science score = "+scienceScore, windowWidth-800,windowHeight+20)
text("congratulations! you have completed the game",windowWidth-800,windowHeight+60)
text("thank you",windowWidth-600,windowHeight+300)

if(mathsScore > scienceScore){
  fill("red")
text("as per my analysis,",windowWidth-800,windowHeight+100)
text("you have got good marks in maths level ",windowWidth-800,windowHeight+160)
text("may you have a bright future ahead!",windowWidth-800,windowHeight+230)

}

if(mathsScore < scienceScore){
  fill("red")
  text("as per my analysis,",windowWidth-800,windowHeight+100)
text("you have got good marks in science level ",windowWidth-800,windowHeight+160)
text("may you have a bright future ahead!",windowWidth-800,windowHeight+230)

  }

  if(mathsScore === scienceScore){
    fill("red")
    text("as per my analysis,",windowWidth-800,windowHeight+100)
  text("you have got same marks in both level ",windowWidth-800,windowHeight+160)
  text("may you have a bright future ahead",windowWidth-800,windowHeight+230)
  
    }
    




  }
  
}
    
  function keylock(){
    var key = createSprite(windowWidth-980, windowHeight/2+390 );
    key.addImage('key',keyimg);
    key.scale = 0.4;

    if(player.isTouching(key)){
      keysound.play();
      // player.collide(key);
       key.destroy();
       gameState = "next";
     }
       
  }
    
