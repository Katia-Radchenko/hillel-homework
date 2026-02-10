
function pow(x, y) {
  if (x === 0 && y === 0) return undefined;
  if (x === 0 && y < 0) return undefined;
  if (y === 0) return 1;

  let sum = 1;
  let isNegative = false;

  if (y < 0) {
    isNegative = true;
    y = -y;
  }

  for (let i = 0; i < y; i++) {
    sum *= x;
  }

  if (isNegative) {
    return 1 / sum;
  }

  return sum;
}
console.log(pow(2, -3));