class Game {
  constructor() {
    
    
  }
  preloadGame() {
    console.log("this is the game preload");
    this.backgroundImages = [
      { src: loadImage("../assets/background/country-platform-back.png"), x: 0, speed: 0 },
      { src: loadImage("../assets/background/country-platform-forest.png"), x: 0, speed: 1 },
      { src: loadImage("../assets/background/country-platform-tiles-example.png"), x: 0, speed: 2 },
];
    this.playerImage = loadImage("../assets/player/tarzan-run1.gif");
//     this.playerImages = [
//     { name: "tarzan", src: loadImage("assets/player/tarzan-run1.gif")},
//     { name: "beejo", src: loadImage("assets/player/beejo-run.gif")},
// ]
    // this.obstaclesImages = [
    //   { name: "coins", src: loadImage("assets/obstacles/coins2.gif")},
    //   { name: "box", src: loadImage("assets/obstacles/box.png")},
    //   { name: "brick", src: loadImage("assets/obstacles/brick.png")},
    // ]
     this.coinImage = loadImage("assets/obstacles/coins2.gif");
    
    // this.enemyImages = [
    //   { src: loadImage("assets/obstacles/ninja.gif")},
    //   { src: loadImage("assets/obstacles/zombie-green.gif")},
    //   { src: loadImage("assets/obstacles/crab.gif")},
    // ];
    
    // this.boxImage = loadImage("assets/obstacles/box.png")
    // this.brickImage = loadImage("assets/obstacles/brick.png")

  }
  setupGame() {
    this.background = new Background(this.backgroundImages);
    this.player = new Player(this.playerImage);
    this.obstacles = [];
    //this.enemies = [];
    //this.enemyImage = new obstacle(this.enemyImages[0]);
  }
  drawGame() {
    this.background.drawBackground();
    this.player.drawPlayer();
    if (frameCount % 180 === 0) { //if this number (%60=0) at that moment, push a new obstacle

  console.log("this will be the push event");
      this.obstacles.push(new Obstacle(this.coinImage));
      console.log(this.obstacles);
    } 
      //if this number (%60=0) at that moment, push a new obstacle

    this.obstacles.forEach(function (obstacle) {
      obstacle.drawObstacle();
    });

    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.collision(this.player) || obstacle.x < 0) {
        return false;
      } else {
        return true;
      }
    });

    

    //  call the draw functions for the player + the background
    // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
  }
}


