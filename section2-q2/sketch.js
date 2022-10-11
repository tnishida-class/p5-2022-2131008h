// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      fill((j+i) % 2 == 1 ? 125 :250 ); // ここを変えます

      rect(i * 25, j * 25, 25, 25 );

      rect(i * 25, j * 25, 25, 25 );

      //ここから円の処理。

      if(j<3&&(j+i) % 2 == 1 ){       //上の赤の条件（ｙが3以下、黒にだけかぶせる）
        fill(225,0,0)
        ellipse(i*25+12.5,j*25+12.5,23)
      }
      else if(4<j &&(j+i)% 2 == 1){
        fill(0,0,0)
        ellipse(i*25+12.5,j*25+12.5,23)
      }
      
      


    }
  }
}
