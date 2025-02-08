const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHight = 20;
const borderWidth = 345
const borderHight = 240

class Block {
  constructor(xAxis, yAxis){
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHight]
    this.topRight = [xAxis + blockWidth, yAxis + blockHight]
  }
}

export const blocks = [ 
    new Block(5, 220),
    new Block(90, 220),
    new Block(175, 220),
    new Block(260, 220),
    new Block(5, 200),
    new Block(90, 200),
    new Block(175, 200),
    new Block(260, 200),
    new Block(5, 180),
    new Block(90, 180),
    new Block(175, 180),
    new Block(260, 180),
  ];

export function addBlock(){
  for(let i = 0; i < blocks.length; i++){
   // let block = block[i]
    const block = document.createElement('div');
    block.classList.add('block')
    block.style.left = blocks[i].bottomLeft[0] + 'px'
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'
    grid.appendChild(block)
  }
}
