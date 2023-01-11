// 함수 타입 지정 방법
let testFunction = function (a) {
    return 10;
};
let userInformation = {
    name: 'kim',
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log('안녕');
    }
};
userInformation.plusOne(1);
userInformation.changeName();
let cutZero = (x) => {
    let noZero = x.replace(/^0+/, "");
    return noZero;
};
let removeDash = (x) => {
    let removeDash = x.replace(/-/g, "");
    return parseFloat(removeDash);
};
let callBackFunc1 = (x, param1, param2) => {
    let result1 = param1(x);
    let result2 = param2(result1);
    console.log(result2);
};
callBackFunc1('010-1111-2222', cutZero, removeDash);
