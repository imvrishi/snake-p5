class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.tails = [];
    this.direction = RIGHT_ARROW;
  }

  dir(xspeed, yspeed, direction) {
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.direction = direction;
  }

  eat() {
    let overlap = dist(Food.x(), Food.y(), this.x, this.y);
    if (overlap < 1) {
      this.tails.push({ x: Food.x(), y: Food.y() });
      Food.spawn();
    }
  }

  death() {
    for (let tail of this.tails) {
      let overlap = dist(tail.x, tail.y, this.x, this.y);
      if (overlap < 1) {
        this.gameOver();
      }
    }
    if (this.x >= maxWidth || this.x < 0 || this.y >= maxHeight || this.y < 0) {
      this.gameOver();
    }
  }

  gameOver() {
    this.xspeed = 0;
    this.yspeed = 0;
    text("Game Over", maxWidth / 2, maxHeight / 2);
    noLoop();
  }

  move() {
    if (this.tails.length) {
      for (let i = 1; i < this.tails.length; i++) {
        this.tails[i - 1] = this.tails[i];
      }
      this.tails[this.tails.length - 1] = { x: this.x, y: this.y };
    }

    this.x += this.xspeed;
    this.y += this.yspeed;

    this.death();
    this.eat();
    this.draw();
  }

  draw() {
    fill(255, 255, 255);
    for (let tail of this.tails) {
      rect(tail.x, tail.y, 1, 1);
    }

    rect(this.x, this.y, 1, 1);
  }
}
