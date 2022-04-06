function preload(){}

function setup(){
    canvas = createCanvas(700,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,400);
    video.hide();
}

function draw(){
    image(video, 200, 128, 320, 220);
    fill(255, 0, 0); 
    stroke(255, 0, 0); 
    circle(50, 50, 80); 
    circle(50, 430, 80); 
    circle(650, 50, 80); 
    circle(650, 430, 80); 
    fill(0, 128, 0); 
    stroke(0, 128, 0); 
    rect(90, 40, 520, 20); 
    rect(90, 420, 520, 20); 
    rect(40, 90, 20, 300); 
    rect(640, 90, 20, 300);
}

function take_snapshot(){
    save("download.png");
}