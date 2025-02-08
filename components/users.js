import {changeDirection, ballCurrentPosition} from './ball.js';
import {blocks} from './blocks.js';

export const user = document.createElement('div')
const userStart = [130, 10] 
export const currentPosition = userStart;
const grid = document.querySelector('.grid');
let moveStart = 0
const blockWidth = 100;
const blockHight = 20;

export function addUser(){
  user.classList.add('user')
  drawUser()
  grid.appendChild(user)
}

export function drawUser(){
  user.style.left = currentPosition[0] + 'px'
  user.style.bottom = currentPosition[1] + 'px'
}

function moveUser(e){
    e.preventDefault(); // Prevent scrolling while dragging
    let touchX = e.touches[0].clientX
    currentPosition[0] = touchX - moveStart
   if(currentPosition[0] < 0){
      currentPosition[0] = 0
   }else if(currentPosition[0] > 265){
    currentPosition[0] = 265
  }
  drawUser()
}

function moveUserStart(e){
  moveStart = e.touches[0].clientX - currentPosition[0];
  console.log(moveStart)
}


export function movingUser(){
  user.addEventListener('touchstart', moveUserStart)
  user.addEventListener('click', moveUser)
  user.addEventListener('touchmove', moveUser)
}

export function userCollusion(){
  if(
    (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) && (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHight)
   ){
     changeDirection()
   }
}