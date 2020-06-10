// https://www.youtube.com/watch?v=HyK_Q5rrcr4 Grid info 

var column
var row
var w =40
var grid = [];

//in this video he used floor to only use whole numbers - so i fillowed along with that
function setup() {
    createCanvas(400,400);
    column=floor(width/w);
    row=floor(width/w);

    //for each row create every column\
    for (var y = 0; y < row; i++) {
        for (var x = 0; x < column; i++){
            var cell =  new Cell(x,y);
            //this makes a 10x10grid and tell where each objs local is ^^
            grid.push(cell)
        }
    }
}

function map(){
    background(51);
    for (var y=0; y < cells.length; y++) {
        cells[i].show()
    }

}

//the cell inside the map
//x=column 
//y=row
function Cell(x,y) {
    this.x=x
    this.y=y

    this.show = function() {
        var virtical = this.x;
        

    }
}




























































// let gameStatus = document.getElementById("bottomright")
// let game = document.getElementById("game")


// function Character(x,y,color,width,height) {
//     this.x = x
//     this.y = y
//     this.color = color
//     this.width = width
//     this.height = height
//     this.alive = true
//     this.render = function(){
//         ctx.fillStyle=this.color
//         ctx.fillRect(this.x, this.y, this.width, this.height)
//     }
// }

