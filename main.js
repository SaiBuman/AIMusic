song1 = "";
song2 = "";


function preload() {
    song1 = loadSound("Savage Love.mp3");
    song2 = loadSound("Jugnu.mp3");

}

function setup() {
     canvas = createCanvas(600,500);
     canvas.center();

     video = createCapture(VIDEO);
     video.hide();
}

 function draw() {
     image(video,0,0,600,600);
 }
