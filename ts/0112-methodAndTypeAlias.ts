type SampleType1 = (a: number) => number; // => {} : return type

// 함수 타입 지정 방법
let testFunction: SampleType1 = function (a){
    return 10
}

type UserInfoType = {
    name: string,
    age: number,
    plusOne : (x: number) => number,
    changeName : () => void
}

let userInformation: UserInfoType = {
    name: 'kim',
    age: 30,
    plusOne (x){
        return x + 1
    },
    changeName : () => {
        console.log('안녕')
    }
}

userInformation.plusOne(1)
userInformation.changeName();

// 함수 타입 지정 (type alias)
type CutZeroType = (x: string) => string;
type RemoveDashType = (x: string) => number;

let cutZero: CutZeroType = (x) => {
    let noZero = x.replace(/^0+/, "")
    return noZero
}

let removeDash: RemoveDashType = (x) => {
    let removeDash = x.replace(/-/g, "");
    return parseFloat(removeDash)
}

// 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
// 1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
// 2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
// 3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 

// 함수 타입 alias
type CallBackType = (x: string, func1: CutZeroType, func2: RemoveDashType) => void

let callBackFunc1: CallBackType = (x, param1, param2) => {
    let result1 = param1(x)
    let result2 = param2(result1)
    console.log(result2)
}

callBackFunc1('010-1111-2222', cutZero, removeDash)