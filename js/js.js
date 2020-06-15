// itteration 3!
//I was able to pull functions from the Canvas cralwer/my old tic tac toe for help
//https://www.youtube.com/watch?v=yq2au9EfeRQ&t=1725s this was for the bounce mechanics for the enemies/and for the

//global variables
var canvas = document.querySelector('canvas'); // canvas var is 'looking' for canvas in html
var c = canvas.getContext("2d")

//set canvas size
canvas.width = 750;
canvas.height = 700;

//boolean for gameEnd
var gameEnd = false; // boolean

//global player var
var player;

var frameid;

//empty enemies array
var enemiesGroup = []; // after the game end all eneies are 'killed' we are remaking themall from scratch with a restart fucntion

//key array var
var keys = [];

//Event listener 
// document.addEventListener('keydown', movementHandler)
document.body.addEventListener("keydown", function (e) {
  console.log('hihi')
  keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});


//Enemy spawn amount/size/movement variables
function spawnEnemies() {
  for (var i = 0; i < 20; i++) {
    var radius = 20;
    var x = Math.random() * (canvas.width - radius * 2) + radius; // these cannot be swapped for obvious reasons but remember
    var y = Math.random() * (canvas.height - radius * 2) + radius;
    var vx = 1;//velocity x
    var vy = 1;//naming the velocity will adjust the speed at which the animated circles move

    enemiesGroup.push(new Enemy(x, y, vx, vy, radius));
  }
}

//player variable to obj
player = new Player(10, 10, '#00e600', 16, 16)

// function spawnHero() {
//   player = new Player(10, 10, '#00e600', 16, 16)
// }

//Player Object
function Player(x, y, color, height, width) {
  this.x = x
  this.y = y
  this.color = color
  this.height = height
  this.width = width
  this.alive = true
  
  // this.xm = 50
  // this.ym = 50
  this.velY = 0
  this.velX = 0
  this.speed = 2
  this.friction = 0.98

  //update();

  this.update = function() {
   // requestAnimationFrame(update);
    
    if (keys[87]) {
        if (this.velY > -this.speed) {
            this.velY--;
        }
    }
    
    if (keys[83]) {
        if (this.velY < this.speed) {
            this.velY++;
        }
    }
    if (keys[68]) {
        if (this.velX < this.speed) {
            this.velX++;
        }
    }
    if (keys[65]) {
        if (this.velX > -this.speed) {
            this.velX--;
        }
    }
  
    this.velY *= this.friction;
    this.y += this.velY;
    this.velX *= this.friction;
    this.x += this.velX;
  
    if (this.x >= canvas.width) {
        this.x = canvas.width;
    } else if (this.x <= 5) {
        this.x = 5;
    }
  
    if (this.y > canvas.height) {
        this.y = canvas.height;
    } else if (this.y <= 5) {
        this.y = 5;
    }
  
    // ctx.clearRect(0, 0, 300, 300);
    // ctx.beginPath();
    // ctx.arc(x, y, 5, 0, Math.PI * 2);
    // ctx.fill();
  }
  this.render = function () {
    this.update()
    console.log(this.x,this.y)
    c.fillStyle = this.color
    c.fillRect(this.x, this.y, this.height, this.width)
  }
}


// Enemy Object
function Enemy(x, y, vx, vy, radius) { //this is an object ( everything from this outside needs to be mentioned here)
  this.x = x
  this.y = y
  this.vx = vx
  this.vy = vy
  this.radius = radius
  this.alive = true

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "#00e600";
    c.stroke()
    c.fillStyle = "#e600e6"
    c.fill()
  }

  this.movement = function () { //wall detection
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) { //if var x is GREATER than canvas width then invert velocity "||"and if is LESS than 0 begin increasing - god this is cool
      this.vx = -this.vx
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) { //if var y is GREATER than canvas height then invert velocity "||"and if is LESS than 0 begin increasing 
      this.vy = -this.vy
    }
    if (player.x < this.x + this.radius
      && player.x + player.width > this.x
      && player.y < this.y + this.radius
      && player.y + player.height > this.y) {
      // player.alive = false
      gameEnd = true;
      // add clearing and resetting info cann an (gameEnd())  
      if (gameEnd) {
        gameEnding();
        // setTimeout (gameEnding, 0) // event loops
      }
    } else {
      this.x += this.vx
      this.y += this.vy

      this.draw() //this draws the Enemy
    }

  }
}
// var x = 50,
//     y = 50,
//     velY = 0,
//     velX = 0,
//     this.speed = 2,
//     friction = 0.98




function start() {
  // reset enemies \ creating the enemies 
  for (var i = 0; i < enemiesGroup.length; i++) {
    // c.clearRect(enemiesGroup[i].x, enemiesGroup[i].y, enemiesGroup[i].width, enemiesGroup[i].height)

  }
  // spawnEnemies();
  // enemiesGroup = [];
  //created a hero for the game
  spawnHero();
  // animate();

}


function gameEnding() {
  cancelAnimationFrame(frameid);
  setTimeout(function () {
    c.clearRect(0, 0, canvas.width, canvas.height)
  }, 10)// after gameEnding is called we stop generating ani frames and then clearrect with 10mil timeout

}




//Basic movement
// var x = Math.random() * canvas.width; // these cannot be swapped for obvious reasons but remember
// var y = Math.random() * canvas.height;
// var vx = 2;//velocity x
// var vy = 1//naming the velocity will adjust the speed at which the animated circles move
// var radius = 20

// function movementHandler(e) {
//   // w=> y-=1; a => x-=1; s=> y+=1; d => x+=1
//   // w = 87, a=65, s=83, d=68
//   switch (e.keyCode) {
//     case (87):
//       player.y -= 10
//       break
//     case (65):
//       player.x -= 10
//       break
//     case (83):
//       player.y += 10
//       break
//     case (68):
//       player.x += 10
//       break
//   }
// }


function animate() { //An async function is a function declared with the async keyword. Async functions are instances of the AsyncFunction constructor, and the await keyword is permitted within them.
  if (!player.alive) {
    return
  }
  if (!gameEnd) {
    frameid = requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);//this clears the entire page during each animation (below this code)
    for (let i = 0; i < enemiesGroup.length; i++) {
      enemiesGroup[i].movement();

    }
  }


  if (player.alive) {
    player.render();

  }
}


document.getElementById('button').addEventListener('click', function () {
  spawnEnemies();
  animate();
})


















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