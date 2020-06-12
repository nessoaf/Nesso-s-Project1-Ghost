// itteration 3!

//I was able to pull functions from the Canvas cralwer/my old tic tac toe for help

//https://www.youtube.com/watch?v=yq2au9EfeRQ&t=1725s this was for the bounce mechanics for the enemies/and for the



var canvas = document.querySelector('canvas'); // canvas var is 'looking' for canvas in html
canvas.width = 750;
canvas.height = 750;
var c = canvas.getContext("2d")
var player
var gameEnd = false; // boolean
var enemiesGroup = []; // after the game end all eneies are 'killed' we are remaking themall from scratch with a restart fucntion

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keydown', movementHandler)

})


function spawnEnemies() {
  for (var i = 0; i < 20; i++) {
    var radius = 20;
    var x = Math.random() * (canvas.width - radius * 2) + radius; // these cannot be swapped for obvious reasons but remember
    var y = Math.random() * (canvas.height - radius * 2) + radius;
    var vx = 1;//velocity x
    var vy = 1;//naming the velocity will adjust the speed at which the animated circles move

    enemiesGroup.push(new Enemies(x, y, vx, vy, radius));
  }
}

player = new Player(10, 10, '#00e600', 16, 16)
console.log(player.alive)

function spawnHero() {
  player = new Player(10, 10, '#00e600', 16, 16)
}

function start() {
  console.log('restarting')
  // reset enemies \ creating the enemies 
  for (var i = 0; i < enemiesGroup.length; i++) {
  enemiesGroup[i].alive = false
  }
  // spawnEnemies();
  enemiesGroup = [];
  console.log(enemiesGroup)
  //created a hero for the game
  spawnHero();
  // animate();
  
}


function gameEnding() {
  console.log(enemiesGroup)
      c.clearRect(0, 0, canvas.width, canvas.height);
      console.log('maybeeeee')
      console.log('lost')
      setTimeout(start, 3000)


  // should notification of end
  // give win or lose
  // reset all player position and clear board
  // button to reset game or restart game()
}




//Basic movement
// var x = Math.random() * canvas.width; // these cannot be swapped for obvious reasons but remember
// var y = Math.random() * canvas.height;
// var vx = 2;//velocity x
// var vy = 1//naming the velocity will adjust the speed at which the animated circles move
// var radius = 20

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
      player.x += 10
      break
  }
}


function Player(x, y, color, height, width) {
  this.x = x
  this.y = y
  this.color = color
  this.height = height
  this.width = width
  this.alive = true
  this.render = function () {
    c.fillStyle = this.color
    c.fillRect(this.x, this.y, this.height, this.width)
  }
}

function Enemies(x, y, vx, vy, radius) { //this is an object ( everything from this outside needs to be mentioned here)
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

  this.movement = function () {
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
      player.alive = false
      gameEnd = true;

      // add clearing and resetting info cann an (gameEnd())  
      if (gameEnd) {
        gameEnding();
        // setTimeout (gameEnding, 0) // event loops

      }
    }

    this.x += this.vx
    this.y += this.vy


    this.draw() //this draws the Enemies
  }

}

async function animate() { //An async function is a function declared with the async keyword. Async functions are instances of the AsyncFunction constructor, and the await keyword is permitted within them.
  if (!player.alive) {
    return
  }
  if (!gameEnd) {
    let animation = await requestAnimationFrame(animate);
    console.log('Animate')
    c.clearRect(0, 0, canvas.width, canvas.height);//this clears the entire page during each animation (below this code)
    for (let i = 0; i < enemiesGroup.length; i++) {
      enemiesGroup[i].movement();
    }
  }


  if (player.alive) {
    player.render()
    gameEnd = false;

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
animate();
spawnEnemies();
console.log(enemiesGroup)