class Background {
  constructor(ImageArray) {
    this.images = ImageArray;
    // define the image array here
  }

  drawBackground() {
    this.x--;
    // image(this.images[0].src, 0, 0, width, height);
    // image(this.images[1].src, 0, 0, width, height);
    // image(this.images[2].src, 0, 0, width, height);
    // image(this.images[3].src, this.x, 0, width, height);
    // define the draw logic  for the moving background here
    this.images.forEach(function (backgroundImage) {
      backgroundImage.x -= backgroundImage.speed;
      image(backgroundImage.src, backgroundImage.x, 0, width, height);
      image(backgroundImage.src, backgroundImage.x - width, 0, width, height);
      if (backgroundImage.x < 0) {
        backgroundImage.x = width;
      }
    });
  }
}
