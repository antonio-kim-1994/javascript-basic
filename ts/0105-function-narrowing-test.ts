function narrowingTest (x :(number|string)[]){
    let array :number[] = [];
    for (let i = 0; i < x.length; i++ ){
        if (typeof x[i] === 'string'){
            array[i] = Number(x[i])
        } else {
            array[i] = x[i] as number
        }
    }
    return array
}

console.log(narrowingTest(['1', 2, '3']))

function cleanCode (x :(number|string)[]){
    let array :number[] = [];

    x.forEach((a) => {
        if (typeof a === 'string'){
            array.push(parseFloat(a))
        } else {
            array.push(a)
        }
    })

    return array
}

console.log(cleanCode([123, '3']))