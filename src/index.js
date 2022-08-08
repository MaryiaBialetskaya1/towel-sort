
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix===undefined) return [];
  return matrix.reduce((atr,i,index)=>{
    if(index %2 === 0) {
      i.forEach(n=>atr.push(n))
    }
    else {
      i.reverse().forEach(n=>atr.push(n))
    }
    return atr;
  },[])
}
