// audio.js
let sound;
let amplitude;

function preloadAudio() {
    sound = loadSound('amen2.mp3');
    // sound = loadSound('cellos.mp3');
}

function setupAudio() {
    amplitude = new p5.Amplitude();
}

function getAmplitudeLevel() {
    return amplitude.getLevel();
}

function toggleSound() {
    if (sound.isPlaying()) {
        sound.pause();
    } else {
        sound.play();
    }
}