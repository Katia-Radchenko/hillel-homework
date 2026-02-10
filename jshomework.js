function checkProbabilityTheory(count){
    let countOdd = 0;

    for (let i = 0; i < count; i++){
        let randomNumber  =  Math.floor(Math.random() * (1000 - 100 + 1)) + 100
        if (randomNumber % 2 !== 0){
            countOdd++
        }
        console.log( randomNumber )
    }
    console.log(`${count} разів було згенеровано число`)
    console.log(`${countOdd} разів було згенеровано не парнi числа`)
    console.log(`${count - countOdd} разів було згенеровано парнi числа`)

    let resultOdd = (countOdd / count * 100).toFixed(2)
    console.log(`${resultOdd} %  не парних`)
    console.log( `${(100 - resultOdd).toFixed(2)} % парних`)

}

checkProbabilityTheory(10000)