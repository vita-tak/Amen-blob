function setupAnimation1() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    rectMode(CENTER);
    frameRate(60); // Begränsar bildhastigheten till 30 fps
}

function drawAnimation1() {
    background(10, 20, 30);
    noFill();
    stroke(255);

    translate(width / 2, height / 2);

    for (var i = 0; i < 100; i++) { // Minskade antalet rektanglar till 100
        push();
        rotate(sin(frameCount + i / 50) * 10);
        rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i);
        pop();
    }
}
