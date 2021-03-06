class Enemy {
  constructor(enemiesImage) {
    this.image = enemiesImage;
    this.height = 58;
    this.width = 58;
    this.x = width;
    this.y = height - this.height - 58;
  };

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

  drawEnemy(){
    this.x -= 4;
    image(this.image, this.x, this.y, this.width, this.height);
  }
}