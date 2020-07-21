class Food{
	constructor(xSize, ySize){
		this._maxXSize = xSize;
		this._maxYSize = ySize;
		this._foodLocation = {
			row: 0,
			col: 0
		}
	}

	resetLocation(snakeBody, snakeHead){
		this._foodLocation.row = rNG(this._maxYSize);
		this._foodLocation.col = rNG(this._maxXSize);
		snakeBody.forEach((item) => {
			if (item.row == this._foodLocation.row && item.col == this._foodLocation.col){
				this.resetLocation(snakeBody, snakeHead);
			}
		});
		if (snakeHead.row == this._foodLocation.row && snakeHead.col == this._foodLocation.col){
			this.resetLocation(snakeBody, snakeHead);
		}
	};

	location(){
		return this._foodLocation;
	}
}
