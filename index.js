const width = innerWidth - 50;
const height = innerHeight - 50;

let x = 350;
let y = 350;
let foodY = y - 40;
let foodX = x - 40;
let h = 20;
let w = 20;
let lastX = 350 - w;
let lastY = 350;
let tail = [];
let marginOfError = h/2;

function setup () {
  createCanvas(width, height);
  let xc = constrain(x, 0, width);
  let yc = constrain(y, 0, height);
  tail.push({
    x: lastX,
    y: lastY
  });
}

function addToTail () {
  tail.push({
    x: lastX - w,
    y: lastY - h
  })
  console.log(tail)
}

function draw () {
  clear();
  background(21);
  fill(150);
  frameRate(10)
  let xc = constrain(x, 0, width - w);
  let yc = constrain(y, 0, height - h);

  rect(xc, yc, h, w);

  for (let i = 0; i < tail.length; i++) {
    rect(tail[i].x, tail[i].y, h, w);
    tail[i].y = tail[i].y,
    tail[i].x = tail[i].x 
  }

  if(keyIsPressed) {
    switch (keyCode) {
      case LEFT_ARROW:
        x = x - w;
        lastX = x;
        break;
      case RIGHT_ARROW:
        x = x + w;
        lastX = x;
        break;
      case UP_ARROW:
        y = y - h;
        lastY = y;
        break;
      case DOWN_ARROW:
        y = y + h;
        lastY = y;
        break;
      default:
        break;
    }
  }

} 
