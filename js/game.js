var e1 = 150
var e2 = 100
var vx = .9
var vy = .9
radius = 30

function enemies1() {
    requestAnimationFrame(enemies1);

    c.clearRect(0,0,canvas.width,canvas.height)

    c.beginPath()
    c.arc(e1,100,radius,0, Math.PI*2, false)
    c.strokeStyle = "blue"
    c.stroke()
    c.fillStyle = "blue"
    c.fill()
    if (e1 + radius > canvas.width || e1-radius < 0 ) { //if var x is GREATER than canvas width then invert velocity "||"and if is LESS than 0 begin increasing - god this is cool
    vx=-vx
}
e1+=vx
}
enemies1()


function enemies2() {
    requestAnimationFrame(enemies2);
    

    c.beginPath()
    c.arc(300,e2,radius,0, Math.PI*2, false)
    c.stroke()
    c.fillStyle = "blue"
    c.fill()
    if (e2 + radius > canvas.height || e2-radius < 0 ) { //if var x is GREATER than canvas width then invert velocity "||"and if is LESS than 0 begin increasing - god this is cool
    vy = -vy
}
e2 += vy
}
enemies2()


function enemies3() {
    requestAnimationFrame(enemies3);

    c.beginPath()
    c.arc(450,e2,radius,0, Math.PI*2, false)
    c.stroke()
    c.fillStyle = "blue"
    c.fill()
    if (e2 + radius > canvas.height || e2-radius < 0 ) { //if var x is GREATER than canvas width then invert velocity "||"and if is LESS than 0 begin increasing - god this is cool
    vy = -vy
}
e2 += vy
}

enemies3()


function enemies4() {
    requestAnimationFrame(enemies4);

    c.beginPath()
    c.arc(600,e2,radius,0, Math.PI*2, false)
    c.stroke()
    c.fillStyle = "blue"
    c.fill()
    if (e2 + radius > canvas.height || e2-radius < 0 ) { //if var x is GREATER than canvas width then invert velocity "||"and if is LESS than 0 begin increasing - god this is cool
    vy = -vy
}
e2 += vy
}
enemies4()

function enemies5() {
    requestAnimationFrame(enemies5);

    c.beginPath()
    c.arc(750,e2,radius,0, Math.PI*2, false)
    c.stroke()
    c.fillStyle = "blue"
    c.fill()
    if (e2 + radius > canvas.height || e2-radius < 0 ) { //if var x is GREATER than canvas width then invert velocity "||"and if is LESS than 0 begin increasing - god this is cool
    vy = -vy
}
e2 += vy
}
enemies5()

function enemies6() {
    requestAnimationFrame(enemies6);

    c.beginPath()
    c.arc(900,e2,radius,0, Math.PI*2, false)
    c.stroke()
    c.fillStyle = "blue"
    c.fill()
    if (e2 + radius > canvas.height || e2-radius < 0 ) { //if var x is GREATER than canvas width then invert velocity "||"and if is LESS than 0 begin increasing - god this is cool
    vy = -vy
}
e2 += vy
}
enemies6()

function enemies7() {
    requestAnimationFrame(enemies7);

    c.beginPath()
    c.arc(e1,250,radius,0, Math.PI*2, false)
    c.stroke()
    c.fillStyle = "blue"
    c.fill()
    if (e1 + radius > canvas.width || e1-radius < 0 ) { //if var x is GREATER than canvas width then invert velocity "||"and if is LESS than 0 begin increasing - god this is cool
    vx=-vx
}
e1+=vx
}
enemies7()
function enemies8() {
    requestAnimationFrame(enemies8);

    c.beginPath()
    c.arc(e1,400,radius,0, Math.PI*2, false)
    c.stroke()
    c.fillStyle = "blue"
    c.fill()
    if (e1 + radius > canvas.width || e1-radius < 0 ) { //if var x is GREATER than canvas width then invert velocity "||"and if is LESS than 0 begin increasing - god this is cool
    vx=-vx
}
e1+=vx
}
enemies8()

function enemies9() {
    requestAnimationFrame(enemies9);

    c.beginPath()
    c.arc(e1,550,radius,0, Math.PI*2, false)
    c.stroke()
    c.fillStyle = "blue"
    c.fill()
    if (e1 + radius > canvas.width || e1-radius < 0 ) { //if var x is GREATER than canvas width then invert velocity "||"and if is LESS than 0 begin increasing - god this is cool
    vx=-vx
}
e1+=vx
}
enemies9()

function enemies10() {
    requestAnimationFrame(enemies10);

    c.beginPath()
    c.arc(e1,700,radius,0, Math.PI*2, false)
    c.stroke()
    c.fillStyle = "blue"
    c.fill()
    if (e1 + radius > canvas.width || e1-radius < 0 ) { //if var x is GREATER than canvas width then invert velocity "||"and if is LESS than 0 begin increasing - god this is cool
    vx= -vx
}
e1 += vx
}
enemies10()