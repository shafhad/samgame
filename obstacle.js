class Obstacle{
  constructor(x,y,width,height){
    this.ob = createSprite(x,y,width,height)
    this.ob.addImage(monsterimg)
    this.ob.scale = 0.6;
    this.ans = createInput()
    this.go = createButton("Go");
    //this.ob2 = createSprite(x,y,width,height)
    //this.ob2.addImage(monster2img)
    //this.ob2.scale = 0.5;
  }
 
  goButton(){
    this.go.mousePressed( () => {
      //chance = obstacle.ans.value();
      console.log(chance);
    //chance.toLowerCase();
   // chance= chance+"";
    if(chance.localeCompare("giraffe") === 0){
      console.log("great!!")
      gameState = "level1";
    }
    else {}
   });
  }

}