
function pow(x, y) {
    let sum = 1
    for (let i = 0; i < y; i++) {
        sum *= x
    }
    return sum
}
pow(2,3)