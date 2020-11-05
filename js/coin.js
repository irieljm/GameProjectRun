class Coin {
  constructor(coinImage) {
    this.image = coinImage;
    this.x = width;
    this.y = (Math.random() * height) / 1.2;
    this.height = 20;
    this.width = 20;
   
  }

  isCollision(playerInfo) {
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(obstacleX, obstacleY, playerX, playerY) > 40) {
      return false;
    } else {
      return true;
    }
  }

  draw() {
    this.x -= 4;
    image(this.image, this.x, this.y, this.width, this.height);
  }
  
}
