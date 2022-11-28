//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;

  let rx = random(0,255);
  let rz = random(0,255);
  let ry = random(0,255);
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random(30,150), vx: dx, vy: dy};
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
