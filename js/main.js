// var playerImages = []
// var Enemies = [];
// var obstacles = []


const game = new Game(); //constructing a new game

function preload() { //when we load the page, this loads first the images
  game.preloadGame();
 
}
function setup() { //initialize what we want for the game => the classes
  createCanvas(1000, 500);
  game.setupGame();
}
function draw() { //*60 times a second /called over and over again, which allows us the animation
  clear();
  game.drawGame();
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
