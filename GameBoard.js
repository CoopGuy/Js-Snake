class GameBoard{
	constructor(xSize, ySize){
		this._gameBoard = [];
		this._xSpan = xSize;
		this._ySpan = ySize;
		this.initializeGameBoard();
	}

	initializeGameBoard(){
		for(let y = 0; y < this._ySpan; y++){
			let pushArray = [];
			for(let x = 0; x < this._xSpan; x++){
				pushArray.push(0);
			}
			this._gameBoard.push(pushArray);
		}
	}

	printGameboard(){
		document.getElementById('test').innerHTML = this._gameBoard;

	}

	updateGameBoard(snakeBody, snakeHead, food){
		this._gameBoard = []
		this.initializeGameBoard();

		try {
			snakeBody.forEach(element => {
				this._gameBoard[element.row][element.col] = 2;
			});
			this._gameBoard[snakeHead.row][snakeHead.col];
		} catch (e) {
			return false;
		}
		this._gameBoard[food.row][food.col] = 3;
		return true;
	}

	board(){
		return this._gameBoard;
	}
	height(){
		return this._ySpan;
	}
	width(){
		return this._xSpan;
	}
}
