class Player {
  constructor(playerImage) {
    this.image = playerImage; //=> this allows to add more players
    this.height = 180;
    this.width = 100;
    this.x = 0;
    this.y = height - this.height;
    this.gravity = 0.2;
    this.velocity = 0;
    this.speedX = 0;
    this.speedY = 0;
    // set the height, the initial location + the jump controls for the player
  }
  drawPlayer() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    console.log(this.y);
    // draw the player + jump logic with velocity
    if (this.y >= height - this.height) {
      this.y = height - this.height;
    }
    image(this.image, this.x, this.y);
  }

  jump() {
    if (this.y == height - this.height) {
      this.velocity = -10;
    }
  }

  runForwards() {
    if (this.x < width - this.width) {
      this.x += 5;
    }
  };

  runBackwards() {
    if (this.x > 0) {
      this.x -= 5;
    }
  };
}

