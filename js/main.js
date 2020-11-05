var game = new Game(); 

var players = [];
var Enemies = [];
var obstacles = [];

minHeight = 20;
maxHeight = 100;
minWidth = 10;
maxWidth = 20;
minGap = 200;
maxGap = 500;



function preload() { //when we load the page, this loads first the images
  game.preloadGame();
 
}
function setup() { //initialize what we want for the game => the classes
  createCanvas(1000, 500);
  game.setupGame();

}

function everyinterval(n) {
  if(this.drawGame.frame % n == 0) return true;
  return false;
}
function draw() { //*60 times a second /called over and over again, which allows us the animation
  clear();
  game.drawGame();
  if(everyinterval(150)) {
    obstacles.push(new obstacle());
  }
  for(let i = 0; i < obstacles.length; i++) {
    this.obstacles[0].x -=1;
    this.obstacles[0].draw();
  }

}

// add the jump function here:
function keyPressed() {
  if (keyCode === 38) {
    game.player.jump(); 
  };
  if (keyCode === 39) {
    game.player.run();
  }

}
