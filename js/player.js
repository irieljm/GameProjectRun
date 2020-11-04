class Player {
  constructor(playerImage) {
    this.image = playerImage; //=> this allowes to add more players
    this.height = 180;
    this.width = 100;
    this.x = 0;
    this.y = height - this.height;
    this.gravity = 0.2;
    this.velocity = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.score = 0;

    // set the height, the initial location + the jump controls for the player
  }
  drawPlayer() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    // draw the player + jump logic with velocity
    if (this.y >= height - this.height) {
      this.y = height - this.height;
    }
    image(this.image, this.x, this.y);
  }

  jump() {
    if (this.y = height - this.height) {
      this.velocity = -8;
      console.log("this will be the jump");
    }

  }
  
  run() {
    if (this.x = width - 500) {
      this.velocity = 2;
      this.speedX = 5;
      console.log("this will be new position");
    }

  }

}
