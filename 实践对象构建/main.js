// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const p=document.querySelector('p');
let ball_nums=0;
// 生成随机数的函数

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};
function random_color(){
    return ("rgb("+random(0,255)+","+random(0,255)+","+random(0,255)+")");

};

class Shape{
  x;
  y;
  velx;
  vely;

  constructor(x,y,velx,vely){
    this.x=x;
    this.y=y;
    this.velX=velx;
    this.velY=vely;
  }
};

class Ball extends Shape{
  color;

  size;
  exists;

  constructor(x,y,velx,vely,color,size){
    super(x,y,velx,vely);
    this.color=color;
    this.size=size;
    this.exists=true;
  }

  draw(){
    ctx.beginPath();
    ctx.fillStyle=this.color;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
    ctx.fill();

  }

  update(){
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }
  
    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }
  
    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }
  
    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }
  
    this.x += this.velX;
    this.y += this.velY;

  }

  collisionDetect(){
    for (let j = 0; j < balls.length; j++) {
      if (this !== balls[j]) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = random_color();
        }
      }
    }
  }

};

class EvilCircle extends Shape{
  color;
  size;
  exists;
  constructor(x,y){
    super(x, y, 20, 20);
    this.exists=true;
    this.size=10;
    this.color='white';

  }

  draw(){
    ctx.beginPath();
    ctx.lineWidth=3;
    ctx.strokeStyle=this.color;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI);
  
    ctx.stroke();
    

  }

  checkbounds(){
    if (this.x + this.size >= width) {

      this.x-=this.size;
    }
  
    if (this.x - this.size <= 0) {

      this.x+=this.size;
    }
  
    if (this.y + this.size >= height) {

      this.y-=this.size;
    }
  
    if (this.y - this.size <= 0) {

      this.y+=this.size;
    }
  
  }

  setControls(){
    window.onkeydown = (e) => {
      switch (e.key) {
        case "a":
          this.x -= this.velX;
          break;
        case "d":
          this.x += this.velX;
          break;
        case "w":
          this.y -= this.velY;
          break;
        case "s":
          this.y += this.velY;
          break;
      }
    };

  }

  collisionDetect(){
    for (let j = 0; j < balls.length; j++) {
        if(balls[j].exists){
          ball_nums++;
          const dx = this.x - balls[j].x;
          const dy = this.y - balls[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < this.size + balls[j].size) {
              balls[j].exists=false;
              ball_nums--;
          }
        }
    }

  }
  

}



let balls=[];
while(balls.length<25){
  let size=random(10,20);
  let ba=new Ball(
    random(0+size,width-size),
    random(0+size,height-size),
    random(-7,7),
    random(-7,7),
    random_color(),
    size
  );
  balls.push(ba);

};




let evil=new EvilCircle(0,0);
evil.setControls();




function loop(){

  ball_nums=0;

  ctx.fillStyle="rgba(0,0,0,0.25)";
  ctx.fillRect(0,0,width,height);

  for(let i=0;i<balls.length;i++){
    if(balls[i].exists){
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
      
    }
  }
  evil.draw();
  evil.checkbounds();
  evil.collisionDetect();

  p.textContent="还剩"+ball_nums+"个球";

  requestAnimationFrame(loop);

};

loop();