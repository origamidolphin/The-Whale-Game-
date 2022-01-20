const SPACE_KEY = 32 //makes SPACE_KEY a constant
function preload() {
  //LOAD IMAGES AND FONTS
  whale = loadImage("whale.png"); //load whale image
  chelsea = loadFont("ChelseaMarket-Regular.ttf") // load first font
  indie = loadFont("IndieFlower-Regular.ttf") //loads second font
}
function setup() {
  createCanvas(windowWidth, windowHeight) //sets up canvas
  space_pressed = false //sets space_pressed to false
  double_clicked = false //sets double_clicked to false
  mouse_pressed = false
  colorMode(RGB) // sets color mode to RGB
  //GRADIENT COLOR SET UP
  b1 = color(24, 24, 45) //starting dark blue for gradient
  b2 = color(24, 30, 52) // blue 2
  b3 = color(23, 35, 59) //blue 3
  b4 = color(20, 41, 66)//blue 4
  b5 = color(16, 48, 73) //blue 5
  b6 = color(9, 54, 79)//blue 6
  b7 = color(0, 60, 85)//blue 7
  b8 = color(0, 67, 90)//blue 8
  b9 = color(0, 73, 95) //blue 9
  b10 = color(0, 80, 99) //blue 10
  b11 = color(0, 86, 102) //blue 11
  b12 = color(0, 93, 104) //blue 12
  b13 = color(0, 99, 106) //blue 13
  b14 = color(0, 106, 107) // blue 14
  b15 = color(1, 112, 107) // blue 15
  //VARIABLE SET UP
  whaleWidth = (width / 2 / 2) //makes the width of the whale image a variable
  whaleHeight = (height / 2) // makes the height of the whale image a variable
  randomCoinWidth = random(width - 100)//makes the location of the coin a variable
  randomCoinHeight = random(height - 100) //makes the location of the coin a variable
  imageMode(CENTER) //changes to image mode center
}
function draw() {
  //GRADIENT BACKGROUND FOR HOMESCREEN
  noStroke()//makes it so there's no outline
  fill(b1);//makes the color blue 1
  rect(0, 0, width, height) //first bottom rectangle for gradient
  fill(b2) // makes the color blue 2
  rect(0, 0, width, height / 1.2)//rectange for gradient
  fill(b3) //makes the color blue 3
  rect(0, 0, width, height / 1.4)//rectange for gradient
  fill(b4)//makes the color blue 4
  rect(0, 0, width, height / 1.7)//rectange for gradient
  fill(b5)//makes the color blue 5
  rect(0, 0, width, height / 2.1)//rectange for gradient
  fill(b6) //makes the color blue 6
  rect(0, 0, width, height / 3)//rectange for gradient
  fill(b7)//makes the color blue 7
  rect(0, 0, width, height / 3.5)//rectange for gradient
  fill(b8)//makes the color blue 8
  rect(0, 0, width, height / 4)//rectange for gradient
  fill(b9)//makes the color blue 9
  rect(0, 0, width, height / 4.5)//rectange for gradient
  fill(b10)//makes the color blue 10
  rect(0, 0, width, height / 5)//rectange for gradient
  fill(b11)//makes the color blue 11
  rect(0, 0, width, height / 5.5)//rectange for gradient
  fill(b12)//makes the color blue 12
  rect(0, 0, width, height / 6)//rectange for gradient
  fill(b13)//makes the color blue 13
  rect(0, 0, width, height / 6.5)//rectange for gradient
  fill(b14)//makes the color blue 14
  rect(0, 0, width, height / 7)//rectange for gradient
  fill(b15)//makes the color blue 15
  rect(0, 0, width, height / 8.5)//last top rectangle for gradient
  //HOME SCREEN
  if (!space_pressed) {
    textFont(chelsea) //sets the font to chelsea
    image(whale, width / 2, height / 2, whaleWidth, whaleHeight) //still whale image
    fill(255) //makes the text white
    strokeWeight(5) //sets stroke weight to 5
    stroke(51, 85, 127)//sets the outline of words to a dark blue
    textAlign(CENTER, CENTER) //aligns text to center coordinates
    text("Whale", width / 2, height / 5) //"whale"
    text("The", width / 2 / 2, height / 2)//"the"
    text("Game", width / 1.3, height / 2)//"game"
    textSize(20) //sets text size to 20
    textFont(indie) //sets the font to indie 
    text("click space to start", width / 2, height / 1.3)//"click space to start"
  }
  //HOW TO MOVE YOUR WHALE SCREEN
  if (space_pressed) {
    background(9, 54, 79) //sets background blue
    image(whale, mouseX, mouseY, whaleWidth, whaleHeight) // moving whale image
    textAlign(CENTER, CENTER) //aligns text to the right center
    fill(255) //makes the text white
    textSize(height / 20) //makes the text size the height/20
    stroke(51, 85, 127) //stroke color blue
    strokeWeight(5) //outline thickness
    text("use your mouse to move the whale!", width / 2, 100) //"use your mouse to move the whale!"
    textSize(10) //makes text size 10
    textFont(indie) //sets to indie font
    noStroke() //makes the text have no outline
    textAlign(CENTER, CENTER) //alligns text to the center coordinates
    text("double click anywhere for next instructions", width / 2, height - 100) //"double click anywhere for next instructions"
  }
  //HOW TO COLLECT COINS SCREEN
  if (double_clicked && space_pressed) {
    background(9, 54, 79) //sets background blue
    stroke(249, 166, 2) //makes the outline of the coin gold
    strokeWeight(6) //makes the thickness of the coin outline 10
    fill(250, 218, 94)//makes the fill color of the coin light yellow
    ellipse(randomCoinWidth, randomCoinHeight, 20) //makes the coin
    image(whale, mouseX, mouseY, whaleWidth, whaleHeight) //loads moving whale image
    textAlign(CENTER, CENTER) //aligns text to the right center
    fill(255) //makes the text white
    textSize(height / 20) //makes the text size 20
    stroke(51, 85, 127) //stroke color blue
    strokeWeight(5) //outline thickness
    textAlign(CENTER, BOTTOM) //aligns text to center bottom coordinates
    text("move your whale to the coin to collect it!", width / 2, height) //"move your whale to the coin to collect it!"
    text("Collect all the coins to win!", width / 2, 200)//"collect all the coins to win!"
  }
  //COIN GAME CODE
  if (dist(mouseX, mouseY, randomCoinWidth, randomCoinHeight) <= 25 && space_pressed && double_clicked) {
    background(9, 54, 79) //sets background blue
    image(whale, mouseX, mouseY, whaleWidth, whaleHeight) //loads moving whale image
    text("Collect all the coins to win!", width / 2, 200)//"collect all the coins to win!"
    text("move your whale to the coin to collect it!", width / 2, height) //"move your whale to the coin to collect it!"
    stroke(249, 166, 2) //makes the outline of the coin gold
    strokeWeight(6) //makes the thickness of the coin outline 10
    fill(250, 218, 94)//makes the fill color of the coin light yellow
    ellipse(randomCoinWidth, randomCoinHeight, 20) //makes the coin
    whaleWidth += 20 //makes it so that the width of the whale image increases by 20 every time you collect a coin
    whaleHeight += 20 //makes it so that the height of the whale image increases by 15 every time you collect a coin
    randomCoinWidth = random(width + 1) //changes the coin's location to a different random variable
    randomCoinHeight = random(height + 1) //changes the coin's location to a different random variable
  }
  //WINNING SCREEN
  if (whaleWidth > width && whaleHeight > height) {
    background(b); //makes background a different color
    image(whale, mouseX, mouseY, width / 2 / 2, height / 2) // whale image
    fill(255) //makes the text white
    strokeWeight(5) //sets stroke weight to 5
    stroke(51, 85, 127)//sets the outline of words to a dark blue
    textAlign(CENTER, CENTER) //alligns text to center coordinates
    textFont(chelsea) //sets font to chelsea
    text("CONGRATULATIONS! YOU BEAT THE WHALE GAME!", width / 2, height - height / 4) //"CONGRATULATIONS! YOU BEAT THE WHALE GAME!"
    textSize(10) //sets the text size to 10
    noStroke() // makes it so that the text has no outline
    textFont(indie)//sets font to indie
    text("press space to play again!", width / 2, height - height / 6) //"press space to play again"
    fill(random(256), random(256), random(256)) //makes confetti a random color
    ellipse(random(width + 1), random(height + 1), random(50)) //makes confetti appear randomly.
    space_pressed = false //sets_pressed to false again
    textAlign(RIGHT,TOP) //aligns text to right top coordinates
    fill(255) //makes the text white
    noStroke() //makes the text have no outline
    textFont(indie) //indie font
    text ("click anywhere to change the water!", width, 0) //"click anywhere to change the water! "
  }
  //MY NAME
  textSize(15) //sets the text size to 15
  textAlign(RIGHT, BOTTOM) //aligns text box to the bottom right coordinates
  noStroke()//makes it so my name has no outline
  fill(255) //makes the text white
  textFont(chelsea)//loads font
  text("Julia", width, height) //writes my name in the bottom right corner
  textSize(height / 10) //sets the text size to be the height/10
}
function keyPressed() {
  if (keyIsDown(SPACE_KEY)) {
    space_pressed = true //changes space_pressed to true
    whaleWidth = width / 2 / 2 / 2 //changes the variable whaleWidth
    whaleHeight = height / 2 / 2 //changes the variable whale Height
  }

}
function doubleClicked() {
  double_clicked = true //changes double_clicked to true
}
function mousePressed() {
  mouse_pressed = true
  b = random([b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15]); //everytime you click the mouse on the endscreen, it changes the background color.
}