let knightPosition = [1,7];
let observer = null;

function emitEvent () {
  observer(knightPosition);
}

/**
 * notifies observer `o` about knight position change
 * @param o observer or subscriber which will be notified of state chnage  
 */
export function observe(o) {
  if(observer){
    throw new Error('only one observer implemented')
  }
  observer = o;

  emitEvent()
}

//following are API's to deal with knight state

/**
 * update knight position to new values
 * @param toX new xpostion  
 * @param toY new yposition 
 */
export function moveKnight(toX, toY){
  knightPosition = [toX,toY];
  emitEvent();
}

export function canKnightMove(toX, toY){
  const [x,y] =knightPosition
  const absoluteDiffX = Math.abs(x-toX); 
  const absoluteDiffY = Math.abs(y-toY); 

  return (absoluteDiffX === 2 && absoluteDiffY === 1) || (absoluteDiffX === 1 && absoluteDiffY === 2);
}

