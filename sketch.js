var bullet,wall,speed,weight,thickness

function setup() {  
  createCanvas(800,400);
  speed=random(223,321)
  weight=random(30,52)    
  
  thickness=random(22,83)
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(700, 200, 60,height/2);
  damagereader=createSprite(200,300, 50,50);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
 bullet.velocityX=speed;

}

function draw() {
  background(255,255,255); 
 if(hascollided(bullet,wall)){
   bullet.velocityX=0
var damage =.5*weight*speed*speed/(thickness*thickness*thickness)
  
 
if(damage>10){
  damagereader.shapeColor="green"
   }
   if( damage<10){
    damagereader.shapeColor="red"
  }
  } 
  drawSprites();
}
function  hascollided(object1,object2){
if(object2.x-object1.x<object1.width/2+object2.width/2)
{

return true;


}
else{
return false;


}
}