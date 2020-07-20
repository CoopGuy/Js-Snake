
const boardXSize = Math.round(window.innerWidth/30);
const boardYSize = Math.round(window.innerHeight/30);
const canvas = document.getElementById('canvas');
const scaleX = 150;
const scaleY = 120;

const board = new GameBoard(boardXSize,boardYSize);
const snake = new Snake(2,2,boardXSize,boardYSize);
const food = new Food(boardXSize, boardYSize);


let refreshPage = "";
let calculateGame = "";

var movesResolved = 0;
var GLOBALDIRECTION = [null];

canvas.width = boardXSize*scaleX;
canvas.height = boardYSize*scaleY;

const draw = (boardObj, snakeObj, foodObj, canvasContext) => {

	canvasContext.fillStyle = 'rgb(69, 69, 69)';
	canvasContext.fillRect(0,0,boardObj.width, boardObj.height);

	canvasContext.fillStyle = 'rgb(8, 230, 0)';
	snakeObj.body().forEach((item, i) => {
		canvasContext.fillRect(item.col,item.row,1,1);
	});
	canvasContext.fillRect(snakeObj.head().col, snakeObj.head().row,1,1);

	canvasContext.fillStyle = 'rgb(252, 189, 40)'
	canvasContext.fillRect(foodObj.location().col,foodObj.location().row,1,1);

}

const update = () => {
	if(snake.state()){
		snake.direction(GLOBALDIRECTION[0]);
		snake.moveTowardDirection();
		if(GLOBALDIRECTION.length > 1){
			GLOBALDIRECTION.shift();
		}
		snake.foodCheck(food);
		// if(snake.state()){
		// 	snake._snakeLiveState = board.updateGameBoard(snake.body(), snake.head(), food.location());
		// }
	}
	else{
		document.getElementById('liveState').innerHTML = `Congratulations you killed the snake at the whopping size of ${snake.length()} squares long`;
		document.getElementById('instruct').innerHTML  = "Reload this page to play again"
		clearInterval(refreshPage);
		clearInterval(calculateGame);

	}
}

window.onload = function(){
	document.addEventListener("keydown", (keyCode) => {
				var length = GLOBALDIRECTION.length;
				if(keyCode.code == "ArrowLeft" && GLOBALDIRECTION[length-1] !== "RIGHT"){
					GLOBALDIRECTION.push("LEFT");
				}
				else if(keyCode.code == "ArrowRight" && GLOBALDIRECTION[length-1] !== "LEFT"){
					GLOBALDIRECTION.push("RIGHT");
				}
				else if(keyCode.code == "ArrowUp" && GLOBALDIRECTION[length-1] !== "DOWN"){
					GLOBALDIRECTION.push("UP");
				}
				else if(keyCode.code == "ArrowDown" && GLOBALDIRECTION[length-1] !== "UP"){
					GLOBALDIRECTION.push("DOWN");
				}

	});

	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.fillStyle = 'rgb(101, 108, 125)';
		ctx.fillRect(0,0, boardXSize, boardYSize);
		ctx.scale(scaleX, scaleY);

		food.resetLocation(snake.body(), snake.head());

		refreshPage = setInterval(draw, 17, { width: boardXSize, height: boardYSize }, snake, food, ctx);
		calculateGame = setInterval(update , 85);

	}
	else{
		console.log(':(');
	}
}
