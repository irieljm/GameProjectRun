class Obstacle {
  constructor(obstaclesImages) {
    this.image = obstaclesImages;
    this.x = width;
    this.y = (Math.random() * height) / 1.2;
    this.height = Math.floor(
      minHeight + Math.random() * (maxHeight - minHeight + 1)
    );
    this.width = Math.floor(
      minWidth + Math.random() * (maxWidth - minWidth + 1)
    );
  }

  //   define the collision function
  collision(playerInfo) {
    // console.log("this will be the collision", playerInfo);
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;

    if (dist(obstacleX, obstacleY, playerX, playerY) > 40) {
      return false;
    } else {
      game.player.score += 10;
      console.log(game.player.score);
      return true;
    }
  }

  drawObstacle() {
    this.x -= 4;
    image(this.image[1].src, this.x, this.y, this.width, this.height);
  }
}
