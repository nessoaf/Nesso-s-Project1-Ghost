// itteration 3!

var canvas = document.querySelector('canvas'); // canvas var is 'looking' for canvas in html
canvas.width = 1250;
canvas.height = 750;
var c =canvas.getContext("2d")
var player

function Player(x, y, color, height, width) {
    this.x = x
    this.y = y
    this.color = color
    this.height = height
    this.width = width
    this.alive = true
    this.render = function() {
      c.fillStyle = this.color
      c.fillRect(this.x, this.y, this.height, this.width)
    }
  }
  player = new Player(10,10,'green',16,16)
  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', movementHandler)
      
  })
  

//Basic movement
var x =Math.random() * canvas.width; // these cannot be swapped for obvious reasons but remember
var y =Math.random() * canvas.height;
var vx = 2;//velocity x
var vy = 1//naming the velocity will adjust the speed at which the animated circles move
var radius = 20

function movementHandler(e) {
    // w=> y-=1; a => x-=1; s=> y+=1; d => x+=1
    // w = 87, a=65, s=83, d=68
    switch (e.keyCode) {
      case (87):
        player.y -= 10
        break
      case (65):
        player.x -= 10
        break
      case (83):
        player.y += 10
        break
      case (68):
        player.x +=10
        break
    } 
  }
  

function Enemies(x,y,vx,vy,radius) { //this is an object ( everything from this outside needs to be mentioned here)
    this.x =x
    this.y = y
    this.vx =vx
    this.vy = vy
    this.radius=radius
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI *2,false);
        c.strokeStyle = "blue";
        c.stroke()
    }
    
    this.movement = function(){
        if (this.x +this.radius>canvas.width || this.x-this.radius<0 ) { //if var x is GREATER than canvas width then invert velocity "||"and if is LESS than 0 begin increasing - god this is cool
        this.vx=-this.vx
    }
    if (this.y +this.radius>canvas.height || this.y-this.radius<0 ) { //if var y is GREATER than canvas height then invert velocity "||"and if is LESS than 0 begin increasing 
    this.vy=-this.vy    
    }
if (player.x < this.x + this.radius
    && player.x + player.width > this.x
    && player.y < this.y + this.radius
    && player.y + player.height > this.y) {
      player.alive  = false
      reload() 
      alert
        
    console.log('playerded')

    }

this.x += this.vx
this.y += this.vy


this.draw()
}

}
var enemiesGroup = [];

for (var i=0;i<100;i++) {
    var enemies = new Enemies(200,200,3,3,30)
    var radius = 25;
    var x =Math.random() * (canvas.width - radius*2) +radius; // these cannot be swapped for obvious reasons but remember
    var y =Math.random() * (canvas.height - radius*2) +radius;
    var vx = 1;//velocity x
    var vy = 1;//naming the velocity will adjust the speed at which the animated circles move
    
    enemiesGroup.push(new Enemies(x,y,vx,vy,radius));
}





function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);//this clears the entire page during each animation (below this code)
    for (let i = 0; i < enemiesGroup.length; i++) {
        enemiesGroup[i].movement();   
    }
    if(player.alive){
    player.render()
    }
    // enemies.draw()
    // enemies.movement()
    // c.beginPath();
    // c.arc(x,y,radius,Math.PI*2,false);
    // c.strokeStyle = '#39ff14';
    // c.stroke() ;//.stroke() has to have th () because its a function
    // if (x +radius>canvas.width || x-radius<0 ) { //if var x is GREATER than canvas width then invert velocity "||"and if is LESS than 0 begin increasing - god this is cool
    //     vx=-vx
    // }
    // if (y +radius>canvas.height || y-radius<0 ) { //if var y is GREATER than canvas height then invert velocity "||"and if is LESS than 0 begin increasing 
    //     vy=-vy
    // }
    
    //     x += vx
    //     y += vy
}
animate()





// .fillRect is a rectangle thats filled and it take s an x, y, heigh, width
// c.fillStyle = 'rgba(255,255,0,1)'
// c.fillRect(100,100,100,100)
// c.fillStyle = 'rgba(0,255,255,1)'
// c.fillRect(200,200,100,100)
// c.fillStyle = 'rgba(255,0,255,1)'
// c.fillRect(300,300,100,100)
// c.fillStyle = 'rgba(122,122,122,1)'
// c.fillRect(400,400,100,100)

// //lines
// c.beginPath();
// c.moveTo(100,100)// starting point for begin path
// c.lineTo(200,200)//next location and the type
// c.lineTo(300,300);
// c.lineTo(400,400);
// c.strokeStyle = "black";
// c.stroke();

// //how to make randomly placed circle
// for (var i=0; i<7;i++){
//     var x = Math.random() * canvas.width;
//     var y = Math.random() * canvas.height;
//     c.beginPath();
//     c.arc(x,y,20,0,Math.PI *2,false);
//     c.strokeStyle = "tan";
//     c.stroke()
// }