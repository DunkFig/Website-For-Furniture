class city {
  
  // The color Iterator cycles through what color its looking for an average of, and the color parameter allows you to cycle through different states changing the passive fill this is more so for if you want to create a variety of different city types later. 
  constructor(x, y, size, ColorIt, color) {
    this.color = color
    this.it = ColorIt
    this.x = x;
    this.y = y;
    this.size = size;
    this.blockArray = [];
  }

  check() {
    this.blockArray = [];
    this.avgTot = 0;
    noStroke()
    if (this.color == 1){
      fill(0, 0, 255, 30);
    }else{
      fill(0, 255, 0, 30)
    }
    rect(this.x, this.y, this.size, this.size);
    for (let y = this.y; y < this.y + this.size; y++) {
      for (let x = this.x; x < this.x + this.size; x++) {
        this.area = get(x, y);
        this.blockArray.push(this.area);
      }
    }
    // console.log(this.blockArray)
    for (let i = 0; i < this.blockArray.length; i++) {
      this.avgTot += this.blockArray[i][this.it];
    }

    this.avg = this.avgTot / this.blockArray.length;
    if (this.avg > 100) {
      fill(0, 255);
      rect(this.x, this.y, this.size, this.size);
    }
    this.direction = random();
    if (this.direction > 0 && this.direction <= 0.25) {
      this.x += this.size;
    } else if (this.direction > 0.25 && this.direction <= 0.5) {
      this.x -= this.size;
    } else if (this.direction > 0.5 && this.direction <= 0.75) {
      this.y += this.size;
    } else {
      this.y -= this.size;
    }
    if (this.x < 0) {
      this.x = width 
    }
    if (this.y < 0) {
      this.y = height;
    }
    if (this.y > height) {
      this.y = 0;
    }
    if (this.x > width ) {
      this.x = 0;
    }
  }
}
