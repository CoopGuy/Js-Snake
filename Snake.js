class Snake{
	constructor(snakeXLoc, snakeYLoc, xSize, ySize){

		this._snakeHead = { row:snakeYLoc, col:snakeXLoc };
		this._snakeBody = [];
		this._snakeSize = 1000;

		this._directionPointing = null;
		this._snakeLiveState = true;

		this._maxXBound = xSize;
		this._maxYBound = ySize;
	}

	addSnakeSegment(snakehead){
		const passThrough = {
			row: snakehead.row,
			col: snakehead.col
		}
		this._snakeBody.unshift(passThrough);
	}

	isColliding(){
		let isColliding = false;
		this._snakeBody.forEach((element) => {
			if(isEqual(this._snakeHead, element)){
				isColliding =  true;
			}
		});
		return isColliding;
	}

	foodCheck(food){
			if(isEqual(this._snakeHead, food.location())){

				food.resetLocation(this._snakeBody, this._snakeHead);
				this._snakeSize += 3;
				console.log(this._snakeSize);
			}
	}

	snakeSize(){
		if(this._snakeBody.length > this._snakeSize){
			this._snakeBody.pop();
		}
	}

	moveTowardDirection(){
		if(this._snakeLiveState == true){
			switch(this._directionPointing){
				case "UP":
					if(this._snakeHead.row > 0 && !this.isColliding()){
						this.addSnakeSegment(this._snakeHead);
						this._snakeHead.row -= 1;
						this.snakeSize();
					}
					else{
						this._snakeLiveState = false;

					}
				break;

				case "DOWN":
					if(this._snakeHead.row < this._maxYBound - 1 && !this.isColliding()){
						this.addSnakeSegment(this._snakeHead);
						this._snakeHead.row += 1;
						this.snakeSize();
					}
					else{
						this._snakeLiveState = false;

					}
				break;

				case "LEFT":
					if(this._snakeHead.col > 0 && !this.isColliding()){
						this.addSnakeSegment(this._snakeHead);
						this._snakeHead.col -= 1;
						this.snakeSize();
					}
					else{
						this._snakeLiveState = false;
					}
				break;

				case "RIGHT":
					if(this._snakeHead.col < this._maxXBound - 1 && !this.isColliding()){
						this.addSnakeSegment(this._snakeHead);
						this._snakeHead.col += 1;
						this.snakeSize();
					}
					else{
						this._snakeLiveState = false;
					}
				break;

				case undefined:
				break;

				case null:
				break;

				default:
					throw new Error("invalid direction");
				break;

			}
		}
		else{
			//  this is the condition for a dead snake if somehow the program breaks and ends up bypassing the
			// 	snake life conditional in update function in src
		}
	}

	direction(dir){
		this._directionPointing = dir;
	}
	head(){
		return this._snakeHead;
	}
	body(){
		return this._snakeBody;
	}
	state(){
		return this._snakeLiveState;
	}
	length(){
		return this._snakeSize;
	}
}
