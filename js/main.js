let game = new Game();

let players = [];
let Enemies = [];
var scoreBoard;


// minHeight = 20;
// maxHeight = 100;
// minWidth = 10;
// maxWidth = 20;
// minGap = 200;
// maxGap = 500;

function preload() {
  //when we load the page, this loads first the images
  game.preloadGame();
}
function setup() {
  //initialize what we want for the game => the classes
  createCanvas(1000, 500);
  game.setupGame();
}

// function everyinterval(n) {
//   if (this.drawGame.frame % n == 0) return true;
//   return false;
// }
function draw() {
  game.drawGame();

  if(keyIsDown(39)) {
    game.player.runForwards();
  }
  if (keyIsDown(37)) {
    game.player.runBackwards();
  }
}

function keyPressed() {
  if (keyCode === 38) {
    game.player.jump();
  }
  return false;
}

