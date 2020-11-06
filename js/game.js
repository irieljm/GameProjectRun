class Game {
  constructor() {
    this.players = [];
    this.coins = [];
    this.enemies = [];
    this.gameOver = false;
  }
  preloadGame() {
    //console.log("this is the game preload");
    this.backgroundImages = [
      {
        src: loadImage("assets/background/country-platform-back.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("assets/background/country-platform-forest.png"),
        x: 0,
        speed: 1,
      },
      {
        src: loadImage(
          "assets/background/country-platform-tiles-example.png"),
        x: 0,
        speed: 2,
      },
    ];
    this.playerImage = loadImage("assets/player/tarzan-run1.gif");
    this.coinImage = loadImage("assets/obstacles/coins2.gif");
    this.enemiesImage = loadImage("assets/obstacles/rogue3.gif");
      
    this.scoreBoard = new ScoreBoard();    
  }


  setupGame() {
    this.background = new Background(this.backgroundImages);
    this.player = new Player(this.playerImage);
  }

  finishGame() {
    this.gameOver = true;
    clear();
      this.background.drawBackground();
    fill("red");
    rect(100, 100, 800, 300, 20);
    fill(0, 102, 153);
    textSize(32);
    textAlign(CENTER, CENTER);

    text(`YOU'RE DEAD!! Final Score: ${this.scoreBoard.score}`, 100, 100, 800, 300);
  }

  drawGame() {
    if(!this.gameOver) {
      clear();
      this.background.drawBackground();
      this.player.drawPlayer();
      this.scoreBoard.draw();

      if (frameCount % 180 === 0) { // 60fps -> every 3 seconds
        this.coins.push(new Coin(this.coinImage, height, height - this.player.height));
      };

      this.coins.forEach(function (coin) {
        coin.draw();
      });

      if (frameCount % 300 === 0) { // 60fps -> every 5 seconds
        this.enemies.push(new Enemy(this.enemiesImage));
      }
      this.enemies.forEach(function (enemy) {
        enemy.drawEnemy();
      });

      this.enemies = this.enemies.filter(function (enemy) {
        if (enemy.x < 0) {
          return false;
        }
        return true;
      });
      this.enemies.forEach((enemy) => {
        if (enemy.isCollision(this.player)) {
          this.finishGame();
        }
      });

      this.coins = this.coins.filter((coin) => {
        if (coin.isCollision(this.player)) {
          game.scoreBoard.raiseScore(10);
          return false;
        } else if (coin.x < 0) {
          return false;
        }
        return true;
      });
    }
  }
}


