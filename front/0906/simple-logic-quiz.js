function game(num) {
    if (num % 9 == 0) {
        console.log("박수x2")
    } else if (num % 3 == 0) {
        console.log("박수")
    } else {
        console.log("통과")
    }
}

function test(sub1, sub2){
    if (sub1 < 40 || sub2 < 40){
        console.log("불합격")
    } else if (sub1 + sub2 >= 120) {
        console.log("불합격")
    } else {
        console.log("합격")
    }
}