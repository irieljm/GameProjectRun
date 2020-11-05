class ScoreBoard {
  constructor() {
    this.score = 0;
  }

  draw() {
    rect(30, 20, 200, 55, 20);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(`Score: ${this.score}`, 30, 20, 200, 55);
  }

  raiseScore(score) {
    this.score += score;
  }

  reduceScore(score) {
    this.score -= score;
  }
}

