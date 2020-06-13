// initialize all game or global variables
// enemies empty array
// canvas and all related vars (width, height, etc.)
// gameEnd boolean set to false
// global player var
// declare a player object
// declare a enemy object
// function decleration that spawns the global player using the player object as a template
// function decleration that spawns the enemies using the enemy object
// declare movement handler function for playerMovement
// declare a startGame() function
//// spawn our player using the global player function
//// spawn our enemies using the spawn enemies function
//// declare event listener that attaches a keydown event to document
////// on keydown runs movementHandler
//// while (!endGame) {
////    run enemies movement
//// if gameEnd === true
////    c.clear()
////    display game over message

// target html button 
// add event listener to button onClick()
//// on event run startGame()

function movementHandler() {

    requestAnimationFrame(movementHandler);
    // w=> y-=1; a => x-=1; s=> y+=1; d => x+=1
    // w = 87, a=65, s=83, d=68
    if (keys[87]) {
        if (velY > -speed) {
            velY--;
        }
    }

    if (keys[83]) {
        if (velY < speed) {
            velY++;
        }
    }
    if (keys[68]) {
        if (velX < speed) {
            velX++;
        }
    }
    if (keys[65]) {
        if (velX > -speed) {
            velX--;
        }
    }

    velY *= friction;
    y += velY;
    velX *= friction;
    x += velX;

    if (x >= 295) {
        x = 295;
    } else if (x <= 5) {
        x = 5;
    }

    if (y > 295) {
        y = 295;
    } else if (y <= 5) {
        y = 5;
    }
    c.clearRect(0, 0, 300, 300);
    c.beginPath();
}

var x = 150,
    y = 150,
    velY = 0,
    velX = 0,
    speed = 2,
    friction = 0.98,
    keys = [];

//Event listener 
document.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});