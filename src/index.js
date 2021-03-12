
// You should implement your task here.

 module.exports = function towelSort (matrix) {
    let resArr = [];
  
     if (matrix) {
        matrix.forEach(function(item, index) {
            if ((index + 1) % 2 === 0) {
              item.reverse();
            }
            resArr = resArr.concat(item);
          });
    }
    
     return resArr;
 }

//module.exports = function towelSort (matrix) {
//  if (!matrix) {
//    return [];
//  }

//  return matrix.reduce(function(prev, item, index) {
//    if ((index + 1) % 2 === 0) {
//      item.reverse();
//    }

//    return prev.concat(item);
//  }, []);
//}
