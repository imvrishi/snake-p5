class Food {
  static spawn() {
    self.x = floor(random(0, maxWidth));
    self.y = floor(random(0, maxHeight));
  }

  static draw() {
    fill(200, 0, 0);
    rect(self.x, self.y, 1, 1);
  }

  static x() {
    return self.x;
  }

  static y() {
    return self.y;
  }
}
