// 小手調べ
function setup(){
  createCanvas(100,100);
  
  for(let i = 10; i > 0; i--){
    // BLANK[1]
    if(i>5){
      stroke(255,0,0);
      ellipse(50,50,i*10);
      stroke(255,0,0);

  }
  else{
    stroke(0,0,255);
    ellipse(50,50,i*10);
  
    stroke(0,0,255);
  
  }
}

}
