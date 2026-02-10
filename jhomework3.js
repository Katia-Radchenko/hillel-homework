
function pow(x, y) {

   if (x === 0 && y === 0) return undefined;

   if (x === 0 && y < 0) return undefined;

    if (y === 0) return 1;
    
    let sum = 1
    for (let i = 0; i < y; i++) {
        sum *= x
    }
    return sum
   
}


console.log(pow(2, 3));