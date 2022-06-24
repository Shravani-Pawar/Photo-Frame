function preload() {
  img = loadImage("i am cool.png");
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(450, 300);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 640, 480);

  strokeWeight(3);
  //top starts//
  y = 30;
  while (y <= 580) {
    beginShape(TRIANGLE_STRIP);
    vertex(y, 75);
    y = y + 10;
    vertex(y, 20);
    y = y + 10;
    vertex(y, 75);
    y = y + 10;
    vertex(y, 20);
    y = y + 10;
    vertex(y, 75);
    y = y + 10;
    vertex(y, 20);
    y = y + 10;
    vertex(y, 75);
    endShape();
    //top ends//
    g = 60;
    while (g <= 600) {
      circle(g, 430, 50);
      g = g + 20;
    }
  }
  image(img, 0, 80, 150, 120);
}

function take_snapshot() {
  save("image.png");
}
