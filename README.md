# Js-Snake
  A javascript browser based version of the classic game "Snake"

  The following is an explanation of exactly how the code works and how each file interacts with the main program


  ## The Snake object

  1. The snake object keeps track of several data points of the snake:
     * The direction that the snake is facing 
     * The (x, y) location of the snake head in the form of an object with the keys "row" and "col"
     * The body of the snake in the form of an array holding copies of former head location objects 
         * In each update of the snake location the snake body array has its length checked and reduced to match the snakes stored length 
      * The size of the gameboard to ensure the snake dies if it runs into an outer bound of the gameboard

  2. The snake object also encapsulates the logic for the following:
      * Adding segments to the snake body array
      * checking for collisions between the head and the tail of the snake
      * checking the snake against the food location and adding to the snakes stored length attribute accordingly
      * moving the snake in the current set direction
      * along with accessor or getter methods for snake data required for outside logic

  ## The Food object
  #### The food object is relatively simple - it serves two purposes:

  1. It provides a new random placement for the food within the game 
  1. and it stores that location for later use

  ## The GameBoard object
  _At this point in time the gameboard object serves no purpose_
  _It may eventually be used as an input to an AI however this depends entirely on my ability to learn about and implement AI so no promises_

  ## The Src.js file

  #### This file establishes the actual game, as such it accomplishes multiple goals:

  1. It creates definitions for the game objects
  2. Establishes a DOM eventlistener which checks the arrow keys for input and queues each respective move in the GLOBALDIRECTION array
  3. Defines two functions that form the game:
      1. The update function --> moves the snake object in the set direction, shifts the GLOBALDIRECTION array, and checks whether the snake has eaten the food
      2. The draw function --> draws one frame of the game on the html canvas within index.html
  4. And sets up two intervals to utilize the update and draw function to run the game and continuously display it to the user

  ## The index.html and the style.css files
  These files work together to center a title and some text over the canvas element, which expands or contracts based on the window size to fill the entire viewport

  Due to the code that dictates how the canvas is formatted, the initial size of the game area will be constant and the canvas element will stretch or contract the shapes within itself to maintain the aspect ratio that it initialized with, despite window resizes or viewport resizes

  ## Playing the game
   There are two ways to play the game:
   1. Download the .zip, unzip it, and open index.html in your preferred web browser
      ##### OR
   2. Go to this github hosted link: https://ironcladcode.github.io/Js-Snake/

