function msConverter(m, s){
    let ms = (m * 60 * 1000) + (s * 1000)
    return ms
}

console.log(msConverter(1,30))