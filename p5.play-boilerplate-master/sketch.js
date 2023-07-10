var spaceshipImg, cometImg, backgroundImg, boomImg
var spaceship, obstacle, obstacleGroup
var lives = 3

function preload() {
  spaceshipImg = loadImage("spaceship.png")
cometImg = loadImage("comet.png")
backgroundImg = loadImage("background.jpg")
boomImg = loadImage("boom.png")
}

function setup() {
  createCanvas(800,400);
  obstacleGroup = new Group()
  spaceship = createSprite(370, 300)
  spaceship.addImage("spaceship", spaceshipImg)
  spaceship.addImage("boom", boomImg)
  spaceship.scale = 0.3

}

function draw() {
  background(backgroundImg);
  spawnObstacles()

  if(keyIsDown(UP_ARROW)) {
    spaceship.y = spaceship.y-10
  }

  if(keyIsDown(RIGHT_ARROW)) {
    spaceship.x = spaceship.x+10
  }

  if(keyIsDown(LEFT_ARROW)) {
    spaceship.x = spaceship.x-10
  }

  if(keyIsDown(DOWN_ARROW)) {
    spaceship.y = spaceship.y+10
  }

  if(lives<=0) {
    spaceship.changeImage("boom")
    obstacle.visible = false
    spaceship.scale = 0.4
    lives = 0
    if(keyIsDown(UP_ARROW)) {
      spaceship.x = 400
      spaceship.y = 200
    }

    if(keyIsDown(LEFT_ARROW)) {
      spaceship.x = 400
      spaceship.y = 200
    }

    if(keyIsDown(RIGHT_ARROW)) {
      spaceship.x = 400
      spaceship.y = 200
    }

    if(keyIsDown(DOWN_ARROW)) {
      spaceship.x = 400
      spaceship.y = 200
    }
  }
  drawSprites();


  fill("white")
textSize(20)
  text("Lives = "+lives, 25, 25)
  

  if(lives<=0) {
textSize(40)
    text("Oops! You lost the game!", 200, 100)
  }
}


function spawnObstacles() {
if(frameCount % 80 === 0) {
  obstacle = createSprite(50, 100)
  obstacleGroup.add(obstacle)
  obstacle.addImage("obstacle", cometImg)
  obstacle.scale=0.2
  obstacle.velocityX = 3
  obstacle.y = Math.round(random(10, 400))
  obstacle.x = Math.round(random(10, 200))

  if(obstacleGroup.isTouching(spaceship)) {
    lives -= 1
    obstacleGroup.destroyEach()
  }
}
}

