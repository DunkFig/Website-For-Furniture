let boys = [];
let cit;
let count = 0;
let decayer
let adder = 0
let gradient = 0
let gradientMarker = 1000
let snapSetter = 0


//Changable Parameters through text
let wanderAmt = 4
let waveLength = 0.5
let waveSpeed = 20000
let citySpeed = 1000
let waveInstFreq = 0


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('container')
  initiateBoys()
  cit = new city(width / 2 - 50, height / 2 -50, 50, 0, 1);
  decayer = new decay()
}

function initiateBoys(){
  for (let i = 0; i < boys.length; i ++){
    delete boys[i]
  }
  
  for (let i = 0; i < wanderAmt; i++) {
    let boy = new wander(
      i * 1000 + wanderAmt + random(0, 100),
      windowWidth / (wanderAmt * 2) + (windowWidth / wanderAmt) * i,
      windowHeight/2,
      i + 1,
      (i + 1) * 5  
    );
    boys.push(boy);
  
  }
}

function draw() {
  boys.forEach((boy) => {
    boy.walk();
  });
  
  let density = devicePixelRatio
  if(adder > (density * width * height * 4 * 2) + waveInstFreq){
    adder = 0
    // snap()
    console.log('Up Top again')
}
}

cityCheck();

decayWave()

function cityCheck() {
  setTimeout(function () {
    cit.check();
    cityCheck();
    count += 1;
  }, 1000);
  if (count % 60 == 0) {
    // snap();
  }
}

function decayWave(){
  setTimeout(function () {
  adder += waveSpeed
  gradient += waveLength
  decayer.decays(adder, gradient)
  decayWave()
  if(gradient > gradientMarker){
    gradient = 0
  }
  }, 80)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function EnteredSeed(stringArray, mappedWanderAmt = 4, mappedWaveLength = 0.5){
waveSpeed = 20000
let valuesArray = []
let seednumHolder = document.getElementById('seedNumHol')
seednumHolder.innerHTML = ''
seednumHolder.innerHTML = stringArray
for(let i = 0; i < stringArray.length; i ++){
  let letter = stringArray.charCodeAt(i)
  valuesArray.push(letter)
}
console.log(valuesArray)


//OK WHATS HAPPENING IS THAT IF I CREATE A NEW RANDOM SEED

mappedWanderAmt = floor(map(int(valuesArray[0]), 32, 126, 0, 6))
if(isNaN(mappedWanderAmt)){
  wanderAmt = 0
}else{
wanderAmt = mappedWanderAmt
console.log('Amount of Wanders: ' + wanderAmt)
initiateBoys()
}

mappedWaveLength = map(int(valuesArray[1]), 32, 126, 0.001, 20)
if(isNaN(mappedWaveLength)){
  waveLength = 0.5
  
}else{
waveLength = mappedWaveLength
waveSpeed += floor(random(1, 100) * 4)

}

let mappedGradientMarker = map(int(valuesArray[2]), 32, 126, 1, 10000)
if(isNaN(mappedGradientMarker)){
  gradientMarker = 1000
}else{
gradientMarker = mappedGradientMarker
console.log('gM: ' + gradientMarker)
}

let mappedCitySpeed = map(int(valuesArray[5]), 32, 126, 10, 5000)
if(isNaN(mappedCitySpeed)){
citySpeed = 1000
}else{
citySpeed = mappedCitySpeed
}

let mappedCitySize = map(floor(int(valuesArray[10])), 32, 126, 10, 100)
if(isNaN(mappedCitySize)){
cit.size = 50
}else{
  cit.size = mappedCitySize
}
decayer.randomize()
}


function randomSeeder(){
  var s = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
  let seedLength = 13
  let randomSeedString = ''
  for(let i = 0; i < seedLength; i++){
      randomSeedString += s[floor(random(0, s.length - 1))]
  }
   EnteredSeed(randomSeedString)
}


function snap() {
  snapSetter += 1
  let seedId = String(document.getElementById('seedNumHol').innerHTML)
  console.log(seedId)
  saveCanvas(canvas,  seedId + ' at ' + count + ' seconds', 'png');
  if(snapSetter > 8){
    snapSetter = 0
    randomSeeder()
  }
}