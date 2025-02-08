import {addBlock, blocks} from './components/blocks.js';
import {addUser, drawUser, movingUser, userCollusion, user, currentPosition} from './users.js';
import {moveBall, changeDirection, ballCurrentPosition} from './ball.js';

const grid = document.querySelector('.grid');
const gameOver = document.querySelector('.game-over')
const score = document.querySelector('.score')
let scoreNo = 0;
const blockWidth = 100;
const blockHight = 20;
const borderWidth = 345
const borderHight = 240
let moveStart = 0
let timerId
const ballDiameter = 10
addBlock()
addUser()
movingUser()

//add ball 
timerId = setInterval(moveBall, 30);

export function checkForCollisions(){
  
  //cheak for bloack collisions
  for(let i = 0; i < blocks.length; i ++){
    if(
        (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) && ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
      ){
        const allBlocks = Array.from(document.querySelectorAll('.block'))
        //
        console.log(allBlocks)
         allBlocks[i].classList.remove('block')
         blocks.splice(i, 1)
         scoreNo += 1
         changeDirection()
      }
  }
 score.innerHTML = `Score: ${scoreNo}`
 
 //cheak for user collisions
 userCollusion()
  // cheak for wall collisions
  if(ballCurrentPosition[0] >= (borderWidth - ballDiameter) || ballCurrentPosition[1] >= (borderHight - ballDiameter) || ballCurrentPosition[0] <= 0 ){
    changeDirection()
  }
  
  //check game over 
  if(ballCurrentPosition[1] <= 0){
    clearInterval(timerId)
    gameOver.innerHTML = 'You Lose'
    user.removeEventListener('touchmove', movingUser)
  }
  winUser()
}

function winUser(){
  if(blocks.length === 0){
    clearInterval(timerId)
    gameOver.innerHTML = 'You Win'
    user.removeEventListener('touchmove', moveUser)
  }
}
