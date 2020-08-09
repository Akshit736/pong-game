var ball, ballimg, paddle, paddleimg;
var mouse, edges;

function preload() {
  ballimg = loadImage("ball.png")
  paddleimg = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);


  // create sprites
  paddle = createSprite(390, 200, 15,100);
 paddle.addAnimation("paddle", paddleimg);
  ball = createSprite(200, 180, 10, 10);
ball.addAnimation("paddle1", ballimg);
  /* assign the images to the sprites */


  ball.velocityX = 9
  ball.velocityY = 6
  /* give the ball an initial velocity of 9 in the X direction */



}


function draw() {
  background(205, 153, 0);

  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);


  if (keyDown(UP_ARROW)) {
    paddle.y = paddle.y - 20;
  }
if (keyDown(DOWN_ARROW)) {
    paddle.y = paddle.y + 20;
  }


 

  
  drawSprites();
}
  /* create Edge Sprites here */
//   paddle()

//   /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
//   if (ball.x < 0 || ball.x > width) {

//     ball.velocityX = ball.velocityX * -1

//   }
//   ball.bounceOff(paddle);
//   //paddle.x = mouse.x
//   //  paddle.y = mouse.y

//   if (ball.y < 0 || ball.y > height) {

//     ball.velocityY = ball.velocityY * -1

//   }

//   /* Allow the ball to bounceoff from the paddle */

//   function paddle() {
//     //bounce off paddle
//     if (ball_y < paddle_height &&
//       ball_x > mouseX - paddle_width / 2 &&
//       ball_x < mouseX + paddle_width / 2) {
//       directionY = -directionY

//     }

//     /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */

//     /* Prevent the paddle from going out of the edges */


//     if (keyIsPressed) {
//       if (keyCode == LEFT_ARROW && paddle.x < width) {
//         paddle.x = paddle.x - speed
//         /* what should happen when you press the UP Arrow Key */
//       }

//       if (keyCode == RIGHT_ARROW && paddle.x > 0) {
//         paddle.x = paddle.x + speed
//         /* what should happen when you press the UP Arrow Key */
//       }



//     }
//     drawSprites();

//   }

//   function randomVelocity() {
//     /* this function gets called when the ball bounces off the paddle */
//     /* assign the ball a random vertical velocity, so it bounces off in random direction */

  