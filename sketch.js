var dog
var dog1mg, dog2mg
var happyDog
var database
var foodS
var foodStock

function preload(){
	dog1mg = loadImage("images/dogImg.png")
  dog2mg = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,150,150)
  dog.addImage(dog1mg)
  dog.scale = 0.4
  database = firebase.database()
  foodStock=database.ref('Food')
  foodStock.on("value", readStock)

  
}


function draw() {  
  background(46, 139, 87)
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS)

    dog.addImage(dog2mg)
  }

  drawSprites();

}

function readStock (data){
  foodS=data.val()
}
function writeStock (x){
  if(x<=0){
    x=0
  }
  else {
    x=x-1
  }
  database.ref('/').update({Food:x})
}



