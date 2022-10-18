// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let x;
let lowTime;
let maxTime;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}




function draw(){

  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]

  //let size = count^2 + count*2 +1;
 // ellipse(width / 2, height / 2, size );

 if(keyIsDown(" ".charCodeAt(0))){
  if(count < 95){background(160, 192, 255);
  count = (count + 1) % cycle;
  
  let size = count*2; 
  
  ellipse(width / 2, height / 2, 50 );
  }
  else if(95<count <100){background(160, 192, 255);
    count = (count + 1) % cycle;
    
     
    
    ellipse(width / 2, height / 2, 100 );

  }
 }
 else{
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]

 let size = count^2 + count*2 +1;
 ellipse(width / 2, height / 2, size );

 }





}


 


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


