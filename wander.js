class wander {
  constructor(seed, x, y, speed, size) {
    this.size = size;
    this.speed = speed;
    this.xoff = seed;
    this.x = x;
    this.y = y;
  }

  walk() {
    this.xoff += 0.0009;
    this.n = noise(this.xoff);
    this.m = noise(this.xoff + 100);
    this.mapX = map(this.n, 0, 1, -this.speed, this.speed);
    this.mapY = map(this.m, 0, 1, -this.speed, this.speed);
    this.x += this.mapX;
    this.y += this.mapY;
    strokeWeight(0.5);
    stroke(255, 100, 100);
    fill(255,100)
    // ellipse(this.x, this.y, this.size, this.size);

    beginShape()
    for (let i = 1; i < 64; i++) {
      this.xV = cos(i * this.n) * this.size ;
      this.yV = sin(i * this.m) * this.size ;;
      curveVertex(this.x + this.xV, this.y + this.yV);
    }
    endShape();
  
    if (this.x < -40) {
      this.x = width + 40;
    }
    if (this.y < -40) {
      this.y = height + 40;
    }
    if (this.y > height + 40) {
      this.y = -40;
    }
    if (this.x > width + 40) {
      this.x = -40;
    }
  }
}
