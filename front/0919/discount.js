// 함수
function sample(a, b){
    return a + b
}
let plus = sample(1, 2)

// 소수점 반올림 : .toFixed(자릿수)
function vat1(a){
    let num = (a * 1.1).toFixed(1);
    // => .toFixed를 사용 시 문자로 변환된다.
    // 문자 -> 숫자 변환 : parseFloat(num), parseInt(num)
    return parseInt(num)
}

function discountCalc(price, firstPurchase){
    let total_price = (price * 0.9).toFixed(1);
    if (firstPurchase == true){
        return parseFloat(total_price) - 1.5
    } else {
        return parseFloat(total_price);
    
    // <<< Answoer >>>
    // var result = price * 0.1;
    // if (firstPurchase == true){
    //     result = result - 1.5;
    // }
    // return result
    }
}

console.log(discountCalc(70, false))
console.log(discountCalc(10, true))