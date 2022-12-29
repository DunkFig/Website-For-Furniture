class decay {
  constructor() {
    this.pixel1RedVar = 1
    this.pixel2RedVar = 1

  }

  decays(shift, gradient) {
    this.gradient = gradient;
    this.shift = shift;
    loadPixels();
    this.d = pixelDensity();
    this.quadrant = (width * this.d * height * 4) / 100;
    for (let i = this.shift; i < this.quadrant + this.shift; i += 4) {
      if (i % 8 == 0) {
        pixels[i] = pixels[i] * this.pixel1RedVar
        pixels[i + 1] = this.gradient / this.pixel1Green
        pixels[i + 2] = this.gradient / this.pixel1Blue;
        pixels[i + 3] = pixels[i + 3];
      } else if (i % 12 == 0) {
        pixels[i] = pixels[i] * this.pixel2RedVar
        pixels[i + 1] = this.gradient / this.pixel2Green
        pixels[i + 2] = this.gradient / this.pixel2Blue;
        pixels[i + 3] = pixels[i + 3];
      } else if (i % 16 == 0) {
        pixels[i] = pixels[i] * this.pixel3redVar 
        pixels[i + 1] = this.gradient / this.pixel3Green;
        pixels[i + 2] = this.gradient;
        pixels[i + 3] = pixels[i + 3];
      } else {
        pixels[i] = pixels[i]
        pixels[i + 1] = this.gradient;
        pixels[i + 2] = this.gradient / this.pixel4Blue;
        pixels[i + 3] = pixels[i + 3];
      }
    }
    updatePixels();
  }


randomize(p1Rv = 1, p1G = 1.1, p1B = 2, p2Rv = 1, p2G = 2, p2B = 8, p3Rv = 1, p3G = 2, p4B = 3){

  this.pixel1RedVar = random(0.1, 2.4)
  this.pixel1Green = random(0.1, 2.4)
  this.pixel1Blue = random(0.1, 2.4)

  this.pixel2RedVar = random(0.1, 2.4)
  this.pixel2Green = random(0.1, 4)
  this.pixel2Blue = random(0.1, 8.9)

  this.pixel3redVar = random(0.1, 2.4)
  this.pixel3Green = random(0.1, 2.4)

  this.pixel4Blue = random(0.1, 2.4)


}
}
