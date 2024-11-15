// animation1.js
function preload() {
  preloadAudio();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(60);

  setupAudio(); // Anropa setup-funktionen för ljud
}

function draw() {
  background(10, 20, 30);
  noFill();
  stroke(255);

  translate(width / 2, height / 2);

  // Använd ljudets amplitudnivå
  let volume = getAmplitudeLevel();
  let speed = map(volume, 0, 1, 50, 300);

  for (let i = 0; i < 200; i++) {
    push();
    rotate(sin(frameCount + i * 3) * speed);
    rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i);
    pop();
  }

}

function mousePressed() {
  toggleSound(); // Anropa funktionen för att spela upp eller pausa ljudet
}