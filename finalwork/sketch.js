/*x1 = 195;
x2 = 205;
y1 = 190;
y2 = 210;
x3 = x2 +3;

x5 = x2+6;
  

x4 = 243;
y3 = y1/(x2 - 400) *(x3 -400);
y4 = (y2 - 400)/ (x2 -400) *(x3 - 400) +400;
  
y5 = y1/(x2 - 400) *(x5 -400);
y6 = (y2 - 400)/ (x2 -400) *(x5 - 400) +400;*/
var x1,x2,x3,x4,x5,x6,y1,y2,y3,y4,y5,y6;


var sceneMode;

let ropey;
//13のランダム用
const interval = 15;
let sizer = 11;
const nannka = 0.01
let fadeout = 0;





  
  
//movespeed = 1;


function setup() {
  
  createCanvas(400,800);
  frameRate(7);
  firstScene(x1,x2,y1,y2,x3,y3,y4,x5,y5,y6);
  
  sceneMode = "firScene";
  
  ropey = constrain(1,0 ,390);
  
  rotaterate =constrain(-1,-400,0);
  
  moveupper = 0;
  
  openSpeed = 0;

  

  
}

function firstScene(movespeedx){  //一つ目のシーン
  background(0);
  


  stroke(255,130,0);
  x1 = 195 - movespeedx;
  x2 = 205 + movespeedx;
  y1 = 390 - movespeedx*2;
  y2 = 410 + movespeedx*2;
  x3 = x2 +6+movespeedx;

  x5 = x2+12+movespeedx*2;
  

  x4 = 243;
  y3 = y1/(x2 - 400) *(x3 -400);
  y4 = (y2 - 800)/ (x2 -400) *(x3 - 400) +800;
  
  y5 = y1/(x2 - 400) *(x5 -400);
  y6 = (y2 - 800)/ (x2 -400) *(x5 - 400) +800;

  line(x1,y1,x1,y2);
  line(x1,y2,x2,y2);
  line(x2,y2,x2,y1);
  line(x2,y1,x1,y1);
  line(0,0,x1,y1);
  line(x1,y2,0,800);
  line(x2,y1,x3,y3);
  line(x5,y5,400,0);//右上に上がる線
  
  line(x2,y2,x3,y4);
  line(x5,y6,400,800);
  
  line(x3,y3,x3,y4);

  line(x3,y3,x5,y3);
  line(x3,y4,x5,y4);
  line(x5,y5,x5,y6);  
 
  /*stroke(0);

  line(x5+1,y3,400,y3);
  line(x5+1,y4,400,y4);
  line(x3+1,y3-1,x5-1,y5+1)
  line(x3+1,y4+1,x5-1,y6-1)*/
  }

  function SecondScene(){　　//二つ目のシーン

    

    firstScene(50);

  }

  function ThirdScene(){
    firstScene(100);
  }

  function ForthScene(){
    firstScene(180);
  }
//これは使いませんでした↓
  /*function FifthScene(){
    firstScene(180);
    
    ropex = width/4;
    ropex2 = width/4*3;
    let ropey = 1;

    for(let i ;i<400;i ++){
      ropey = i;
      
      
      
      stroke(255,130,0);

    line(ropex,0,ropex +5,ropey);
    line(ropex2,0,ropex -5,ropey);
      
      
    break;

    }

    


  }*/

  function SixthScene(rotaterate){//SeventhScene左回りも兼ねてるつもり


    background(0);

    movespeedx = 100;
    
    movespeedxr = 3;
  
    

  stroke(255,130,0);
  x1 = 195 - movespeedx;
  x2 = 205 + movespeedx;
  y1 = 390 - movespeedx*2;
  y2 = 410 + movespeedx*2;
  x3 = x2 +6+movespeedx;

  x5 = x2+12+movespeedx*2;
  

  x4 = 243;
  y3 = y1/(x2 - 400) *(x3 -400);
  y4 = (y2 - 800)/ (x2 -400) *(x3 - 400) +800;
  
  y5 = y1/(x2 - 400) *(x5 -400);
  y6 = (y2 - 800)/ (x2 -400) *(x5 - 400) +800;
//右の同じやつを定義している。
  x1r = 595 - movespeedxr;
  x2r = 605 + movespeedxr;
  y1r = 200 - movespeedxr*2;
  y2r = 220 + movespeedxr*2;
  x3r = x2 +6+movespeedxr;

  x5r = x2+12+movespeedxr*2;
  

  x4r = 643;
  y3r = y1r/(x2r - 800) *(x3r -800);
  y4r = (y2r - 800)/ (x2r -800) *(x3r - 800) +800;
  
  y5r = y1r/(x2r - 800) *(x5r -800);
  y6r = (y2r - 800)/ (x2r -800) *(x5r - 800) +800;


  line(x1+rotaterate,y1,x1+rotaterate,y2);
  line(x1+rotaterate,y2,x2+rotaterate,y2);
  line(x2+rotaterate,y2,x2+rotaterate,y1);
  line(x2+rotaterate,y1,x1+rotaterate,y1);
  line(0+rotaterate,0,x1+rotaterate,y1);
  line(x1+rotaterate,y2,0+rotaterate,800);
  line(x2+rotaterate,y1,x3+rotaterate,y3);
  line(x5+rotaterate,y5,400+rotaterate,0);//右上に上がる線
  
  line(x2+rotaterate,y2,x3+rotaterate,y4);
  //line(x5+rotaterate,y6,400+rotaterate,800);
  
  //line(x3+rotaterate,y3,x3+rotaterate,y4);

  //line(x3+rotaterate,y3,x5+rotaterate,y3);
  //line(x3+rotaterate,y4,x5+rotaterate,y4);
  //line(x5+rotaterate,y5,x5+rotaterate,y6);  
//回転したさきのやつが以下
  line(x1r+rotaterate,y1r,x1r+rotaterate,y2r);
  line(x1r+rotaterate,y2r,x2r+rotaterate,y2r);
  line(x2r+rotaterate,y2r,x2r+rotaterate,y1r);
  line(x2r+rotaterate,y1r,x1r+rotaterate,y1r);
  line(400+rotaterate,0,x1r+rotaterate,y1r);
  line(x1r+rotaterate,y2r,400+rotaterate,800);
  line(x2r+rotaterate,y1r,800+rotaterate,0);
  //line(x5r+rotaterate,y5r,800+rotaterate,0);//右上に上がる線
  
  line(x2r+rotaterate,y2r,800+rotaterate,800);
    
  line(400+rotaterate,0,400+rotaterate,800);
    
    line((x1r+x2r+rotaterate*2)/2,y1r,(x1r+x2r+rotaterate*2)/2,y2r);
    line((x1r+x2r+rotaterate*2)/2+1,y1r,(x1r+x2r+rotaterate*2)/2+1,y2r);

  //line(x5r+rotaterate,y6r,800+rotaterate,800);
  
  //line(x3r+rotaterate,y3r,x3r+rotaterate,y4r);

  //line(x3r+rotaterate,y3r,x5r+rotaterate,y3r);
  //line(x3r+rotaterate,y4r,x5r+rotaterate,y4r);
  //line(x5r+rotaterate,y5r,x5r+rotaterate,y6r);  
 
  }


function EighthScene(movespeedxr){
  
  stroke(255,130,0);

  
  x1r = 595 - movespeedxr;
  x2r = 605 + movespeedxr;
  y1r = 200 - movespeedxr*2+moveupper;
  y2r = 220 + movespeedxr*2+moveupper;
  x3r = x2 +6+movespeedxr;

  x5r = x2+12+movespeedxr*2;
  

  x4r = 643;
  y3r = y1r/(x2r - 800) *(x3r -800);
  y4r = (y2r - 800)/ (x2r -800) *(x3r - 800) +800;
  
  y5r = y1r/(x2r - 800) *(x5r -800);
  y6r = (y2r - 800)/ (x2r -800) *(x5r - 800) +800;

  line(x1+rotaterate,y1,x1+rotaterate,y2);
  line(x1+rotaterate,y2,x2+rotaterate,y2);
  line(x2+rotaterate,y2,x2+rotaterate,y1);
  line(x2+rotaterate,y1,x1+rotaterate,y1);
  line(0+rotaterate,0,x1+rotaterate,y1);
  line(x1+rotaterate,y2,0+rotaterate,800);
  line(x2+rotaterate,y1,x3+rotaterate,y3);
  line(x5+rotaterate,y5,400+rotaterate,0);//右上に上がる線
  
  line(x2+rotaterate,y2,x3+rotaterate,y4);
  //line(x5+rotaterate,y6,400+rotaterate,800);
  
  //line(x3+rotaterate,y3,x3+rotaterate,y4);

  //line(x3+rotaterate,y3,x5+rotaterate,y3);
  //line(x3+rotaterate,y4,x5+rotaterate,y4);
  //line(x5+rotaterate,y5,x5+rotaterate,y6);  
//回転したさきのやつが以下
  line(x1r+rotaterate,y1r,x1r+rotaterate,y2r);
  line(x1r+rotaterate,y2r,x2r+rotaterate,y2r);
  line(x2r+rotaterate,y2r,x2r+rotaterate,y1r);
  line(x2r+rotaterate,y1r,x1r+rotaterate,y1r);
  line(400+rotaterate,0,x1r+rotaterate,y1r);
  line(x1r+rotaterate,y2r,400+rotaterate,800);
  line(x2r+rotaterate,y1r,800+rotaterate,0);
  //line(x5r+rotaterate,y5r,800+rotaterate,0);//右上に上がる線
  
  line(x2r+rotaterate,y2r,800+rotaterate,800);
    
  line(400+rotaterate,0,400+rotaterate,800);
  
  line((x1r+x2r+rotaterate*2)/2,y1r,(x1r+x2r+rotaterate*2)/2,y2r);
  line((x1r+x2r+rotaterate*2)/2+1,y1r,(x1r+x2r+rotaterate*2)/2+1,y2r);
  //line(x5r+rotaterate,y6r,800+rotaterate,800);
  
  //line(x3r+rotaterate,y3r,x3r+rotaterate,y4r);

  //line(x3r+rotaterate,y3r,x5r+rotaterate,y3r);
  //line(x3r+rotaterate,y4r,x5r+rotaterate,y4r);
  //line(x5r+rotaterate,y5r,x5r+rotaterate,y6r);  
 
}

function NinthScene(){
  background(0);

  EighthScene(movespeedxr,moveupper);
}

function TenthScene(){
  
}

function EleventhScene(){
  
  
    ThirteenthScene();

  //fill(255);
  //rect(0,0,400,800);
  //background(0);
  stroke(255,130,0);

   movespeedxr = 180;
   moveupper = 179.99999999999972;



  
  x1r = 595 - movespeedxr;
  x2r = 605 + movespeedxr;
  y1r = 200 - movespeedxr*2+moveupper;
  y2r = 220 + movespeedxr*2+moveupper;
  x3r = x2 +6+movespeedxr;

  x5r = x2+12+movespeedxr*2;
  

  x4r = 643;
  y3r = y1r/(x2r - 800) *(x3r -800);
  y4r = (y2r - 800)/ (x2r -800) *(x3r - 800) +800;
  
  y5r = y1r/(x2r - 800) *(x5r -800);
  y6r = (y2r - 800)/ (x2r -800) *(x5r - 800) +800;
  
  
  
  /*line(x1+rotaterate,y1,x1+rotaterate,y2);
  line(x1+rotaterate,y2,x2+rotaterate,y2);
  line(x2+rotaterate,y2,x2+rotaterate,y1);
  line(x2+rotaterate,y1,x1+rotaterate,y1);
  line(0+rotaterate,0,x1+rotaterate,y1);
  line(x1+rotaterate,y2,0+rotaterate,800);
  line(x2+rotaterate,y1,x3+rotaterate,y3);
  line(x5+rotaterate,y5,400+rotaterate,0);//右上に上がる線
  
  line(x2+rotaterate,y2,x3+rotaterate,y4);
  
  
  
  
  //line(x5+rotaterate,y6,400+rotaterate,800);
  
  //line(x3+rotaterate,y3,x3+rotaterate,y4);

  //line(x3+rotaterate,y3,x5+rotaterate,y3);
  //line(x3+rotaterate,y4,x5+rotaterate,y4);
  //line(x5+rotaterate,y5,x5+rotaterate,y6);  */
//回転したさきのやつが以下
  //line(x1r+rotaterate,y1r,x1r+rotaterate,y2r);
  /*line(x1r+rotaterate,y2r,x2r+rotaterate,y2r);
  line(x2r+rotaterate,y2r,x2r+rotaterate,y1r);
  line(x2r+rotaterate,y1r,x1r+rotaterate,y1r);
  line(400+rotaterate,0,x1r+rotaterate,y1r);
  line(x1r+rotaterate,y2r,400+rotaterate,800);
  line(x2r+rotaterate,y1r,800+rotaterate,0);
  //line(x5r+rotaterate,y5r,800+rotaterate,0);//右上に上がる線
  
  line(x2r+rotaterate,y2r,800+rotaterate,800);
    
  line(400+rotaterate,0,400+rotaterate,800);
  
  //line((x1r+x2r+rotaterate*2)/2 -openSpeed,y1r,(x1r+x2r+rotaterate*2)/2-openSpeed,y2r);
  //line((x1r+x2r+rotaterate*2)/2+1+openSpeed,y1r,(x1r+x2r+rotaterate*2)/2+1+openSpeed,y2r);
  //line(x5r+rotaterate,y6r,800+rotaterate,800);
  
  //line(x3r+rotaterate,y3r,x3r+rotaterate,y4r);

  //line(x3r+rotaterate,y3r,x5r+rotaterate,y3r);
  //line(x3r+rotaterate,y4r,x5r+rotaterate,y4r);
  //line(x5r+rotaterate,y5r,x5r+rotaterate,y6r);  */
  //ドアの枠を四角形で書いてみる。
  fill(0);
  quad(0,0,400,0,x2r+rotaterate,y1r,x1r+rotaterate,y1r);
  quad(400,0,400,800,x2r+rotaterate,y2r,x2r+rotaterate,y1r);
  quad(0,800,400,800,x2r+rotaterate,y2r,x1r+rotaterate,y2r);
  quad(0,0,0,800,x1r+rotaterate,y2r,x1r+rotaterate,y1r);
  quad(x1r+rotaterate,y1r,x1r+rotaterate,y2r,(x1r+x2r+rotaterate*2)/2 -openSpeed,y2r,(x1r+x2r+rotaterate*2)/2-openSpeed,y1r);
  quad(x2r+rotaterate,y1r,x2r+rotaterate,y2r,(x1r+x2r+rotaterate*2)/2 +1 +openSpeed,y2r,(x1r+x2r+rotaterate*2)/2+1+openSpeed,y1r)
  
  //開くとこ
  fill(0,0,0,0);
  quad((x1r+x2r+rotaterate*2)/2 -openSpeed,y1r,(x1r+x2r+rotaterate*2)/2+1+openSpeed,y1r,(x1r+x2r+rotaterate*2)/2+1+openSpeed,y2r,(x1r+x2r+rotaterate*2)/2-openSpeed,y2r);
 
}

function ThirteenthScene(){


  





  background(0);
  
  for(let x = 0; x <= 401; x += interval){
    
    for(let y = 0; y <= 800; y += interval){
      let nx = x;
      let ny = y;
      for(let oc = 0; oc< 2;oc++){
        let theta=floor(12*noise(nx*nannka,ny*nannka,frameCount*0.1)*TWO_PI/12);
      nxr = cos(theta);
      nyr = sin(theta);
      stroke(225,130,0);
        noFill();
      rect(nx+nxr*20,ny+nyr*20,sizer,sizer);

      }
   
          }
    
    
      
    
    
  }
  
  


}

//押されたkeyを判別するやつ。
var pussedkey;
function keyTyped() {
  if (key == 'w') {
    console.log("osaretayo")
    
    pussedkey = key;
  } else if (key == 's') {
    
    pussedkey = key;
  }
  else if (key =='d'){
    pussedkey = key;
  }
  else if(key =='a'){
    pussedkey = key;
  }
  /*else if(key != null){
    pussedkey = null;
  }*/
  
  
}


  

 



function draw() {
  

  //console.log({sceneMode});
  
  

  
  //x3 = constrain(x3,205,400);

  

  
  switch(sceneMode){
    
    
    case "firScene":
      firstScene(0);
      if(pussedkey =='w'){            //シーンの分岐してるとこ
        sceneMode = "secScene";
        pussedkey = 'h';
        
      
      }
      else if(pussedkey == 's'){//シーンの分岐してるとこ
        sceneMode = "firScene";
        pussedkey = 'h';
        
      }
      break;
    
    case "secScene":
      console.log("シーン２にしたよ！！")
      SecondScene();
      
      console.log({pussedkey});
      
      if(pussedkey == 'w'){
        sceneMode = "thiScene";
        pussedkey = 'h';
      }
      else if(pussedkey == 's'){//シーンの分岐してるとこ
        sceneMode = "firScene";
        pussedkey = 'h';
      }
      break;

    case "thiScene":
      console.log("シーン3にしたよ！！")
      ThirdScene();
      if(pussedkey == 'w'){
        sceneMode = "forScene";
        pussedkey = 'h';
      }
      else if(pussedkey == 's'){//シーンの分岐してるとこ
        sceneMode = "secScene";
        pussedkey = 'h';
        console.log("Sが押されたよ！！"); //戻る時にこのifが反応しているかどうか
      }
      else if(pussedkey == 'd'){
        sceneMode = "sixScene";
        pussedkey = 'h';
        console.log("Dが押されたよ");
      }
      break;

    case "forScene":
       console.log("シーン4にしたよ！！")
      ForthScene();
      if(pussedkey == 'w'){
        sceneMode = "fifScene";
        pussedkey = 'h';
      }
      else if(pussedkey == 's'){//シーンの分岐してるとこ
        sceneMode = "thiScene";
        pussedkey = 'h';
      }
      break;



    case "fifScene":       
       ropex = width/4;
       ropex2 = width/4*3;
 
      ropey += 30;
      
      console.log({ropey});
       firstScene(180);
      
      if(ropey < 320){
        stroke(255,130,0);

       line(ropex,0,ropex,ropey);

       line(ropex+5 ,0 , ropex+5, ropey);
       line(ropex2,0,ropex2,ropey);
       line(ropex2 -5,0,ropex2 -5 ,ropey); //上のロープ
        
       line(ropex-20,ropey,ropex-20,ropey+200);
       line(ropex-20,ropey+200,ropex2+20,ropey+200);
       line(ropex2+20,ropey+200,ropex2+20,ropey);
       line(ropex2+20,ropey,ropex-20,ropey);
       
       textSize(25)
       text("There is nothing.",ropex+2,ropey + 110);
        
      
       
      
      
      }
      else{
       line(ropex,0,ropex,320);
       line(ropex+5 ,0 , ropex+5, 320);
       line(ropex2,0,ropex2,320);
       line(ropex2 -5,0,ropex2 -5 , 320);//ロープ固定
        
       line(ropex-20,320,ropex-20,520);
       line(ropex-20,520,ropex2+20,520);
       line(ropex2+20,520,ropex2+20,320);
       line(ropex2+20,320,ropex-20,320);
        
       textSize(25)
       text("There is nothing.",ropex+2,430);
        
       
      }
      
       
       console.log("シーン5にしたよ！！");
      
      if(pussedkey == 's'){
        sceneMode = "thiScene";
        ropey = 1;
        pussedkey = 'h';
      }

      
       break;  
      

    case "sixScene":
        
      
      if(rotaterate > -400){
        rotaterate -=40;

        SixthScene(rotaterate);
        

        console.log("六個目の関数実行した！")
      }
      else{
        sceneMode = "eigScene";                      
      }     
       break;
       
    
    case "sevScene":
      if(rotaterate < 0){
        rotaterate +=40;

        SixthScene(rotaterate);//これでいけるの？？
        

        console.log("六個目の関数実行した！")
      }
      else{
        sceneMode = "thiScene";                      
      }     
      break;
    
      
      
      
    case "eigScene":
      
      EighthScene();
      
      if(pussedkey == 'a'){
        sceneMode = "sevScene";
        pussedkey = 'h';
      }
      else if(pussedkey == 'w'){//シーンの分岐してるとこ
        sceneMode = "ninScene";
        pussedkey = 'h';
      }
      break;
      
    case "ninScene"://上に上がる時
      //console.log({movespeedxr});
      
      
      if(movespeedxr < 180){
        
        movespeedxr +=30
        moveupper +=30
        //console.log({moveupper});
        
        NinthScene(movespeedxr,moveupper);
      }
      else if(movespeedxr >=180 && pussedkey == 'w'){
        
        sceneMode = "eleScene";
        pussedkey = 'h';
      }
      else if(movespeedxr >=180 && pussedkey == 's'){
        console.log("s推したよ");
        sceneMode = "tenScene";
        pussedkey = 'h';
        
        
      }
      break;
      
    case"tenScene"://下に降りるとき
      if(movespeedxr >= 30){
        movespeedxr -=30
        moveupper -=36
        
        NinthScene(movespeedxr,moveupper);
      }
      else if(movespeedxr <=30 && pussedkey == 'w'){
        sceneMode = "ninScene";
        pussedkey = 'h';
      }
      else if(movespeedxr <=30 && pussedkey == 'a'){
        sceneMode = "sevScene";
        pussedkey = 'h';
      }
      break;

    case "eleScene"://開けるとき

      if(openSpeed < 150){
          openSpeed += 5;
          EleventhScene();
      }
      else if(openSpeed >= 150 && pussedkey == 'w'){        
          sceneMode = "13Scene";
          pussedkey = 'h';
      }
      else if(openSpeed >= 150 && pussedkey == 's'){        
          sceneMode = "tweScene";
          pussedkey = 'h';
      }
      else{
        ThirteenthScene();
        EleventhScene();
        
        
      }
      break;
      
    case "tweScene"://占めるとき
      
      if(openSpeed >0 ){
        openSpeed -= 5;
          EleventhScene();
      }
      else if(openSpeed <= 0 && pussedkey == 'w'){
        sceneMode = "eleScene";
        pussedkey = 'h';
              
      }
      else if(openSpeed <= 0 && pussedkey == 's'){
        sceneMode ="tenScene"
        pussedkey = 'h';
      }
      break;
      
    case "13Scene":
      console.log("シーン13来たよん");
      EleventhScene();
     
      
      fadeout +=25;

      background(0,fadeout);
      console.log({fadeout});
      
      if(fadeout > 500){
        
        textSize(13)
       text(".12KB",300,700);
      }
     

      

      

      
      
      
     
      
      
        
              

        
        
      
      
      
      
        


        
      
      



    
  }

  
  

  
  
  
  /*if(keyIsDown("W".charCodeAt(0))){ ここから以下は、以前ぬめぬめ動いてた時に
    　　　　　　　　　　　　　　　　　　視点移動として使ってたとこです。
    　　　　　　　　　　　　　　　　　　破綻したのであきらめた。
    
    x1 -= movespeed;
    x2 += movespeed;
    y1 -= movespeed;
    y2 += movespeed;
    
    x3 += 2;
    x5 += 3;
    
    y3 = y1/(x2 - 400) *(x3 -400);
    y4 = (y2 - 400)/ (x2 -400) *(x3 - 400) +400;
    y5 = y1/(x2 - 400) *(x5 -400);
    y6 = (y2 - 400)/ (x2 -400) *(x5 - 400) +400;
 
  
    
    
    
    
  }
  else if(keyIsDown("S".charCodeAt(0))){
    
    x1 += movespeed;
    x2 -= movespeed;
    y1 += movespeed;
    y2 -= movespeed;
    
    
    x3 -= 2;
    
    y3 = y1/(x2 - 400) *(x3 -400);
    y4 = (y2 - 400)/ (x2 -400) *(x3 - 400) +400;
  }
  /*else if(keyIsDown("D".charCodeAt(0))&& x3 >390){
    
    
    x1 -= movespeed;
    x2 -= movespeed;

    y3 = y1/(x2 - 400) *(x3 -400);
    y4 = (y2 - 400)/ (x2 -400) *(x3 - 400) +400;
    
    //x3 -= movespeed;
    
  }
  else if(keyIsDown("A".charCodeAt(0))&& x3 >390){
    
    
    x1 += movespeed;
    x2 += movespeed;

    y3 = y1/(x2 - 400) *(x3 -400);
    y4 = (y2 - 400)/ (x2 -400) *(x3 - 400) +400;
    
    //wx3 += movespeed;
    
  }*/
}