import {checkForCollisions} from '../app.js';

const userStart = [130, 10] 
const currentPosition = userStart
const ballStart = [165, 30]
export const ballCurrentPosition = ballStart

let xDirection = 2
let yDirection = 2
const grid = document.querySelector('.grid');

export function drawBall(){
  ball.style.left = ballCurrentPosition[0] + 'px'
  ball.style.bottom = ballCurrentPosition[1] + 'px'
}

const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)

export function moveBall(){
  ballCurrentPosition[0] += yDirection
  ballCurrentPosition[1] += xDirection
  drawBall()
  checkForCollisions()
}

export function changeDirection(){
  if(xDirection === 2 && yDirection === 2){
    yDirection = -2
    return
  }
  if(xDirection === 2 && yDirection === -2){
    xDirection = -2
    return
  }
  if(xDirection === -2 && yDirection === -2){
    yDirection = 2
    return
  }
  if(xDirection === -2 && yDirection === 2){
    xDirection = 2
    return
  }
  
}