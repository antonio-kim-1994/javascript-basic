// type alias
type SquareTypeAlias = {color: string, width: number}

// interface
interface SquareInterface {
    color: string, 
    width: number
}

//type 과 interface 차이
// interface의 장점 : extends로 속성 복사가능
// interface 중복선언 가능 (유연) => Object 타입 지정할 때
// type 중복선언 불가능 (엄격) => 일반 변수나 함수 타입 지정할 때
// interface는 외부 라이브러리를 사용할 때 많이 사용
interface Student {
    name: string,
}

interface Teacher extends Student {
    age: number
}

// type alias로 interface extends 구현하기
// & 사용이 근본적으로 다르다.
// extends : 복사
// & : 교차 판단(and)
type Animal = {name: string }
type Cat = {age: number} & Animal

let student: Student = {name: 'kim'}
let teacher: Teacher = {name: 'kim', age: 20}

interface MathObj {
    plus: (a: number, b: number) => number,
    minus: (a: number, b: number) => number
}

let testObj :MathObj = {
    plus(a, b){
        return a+b
    },
    minus(a,b){
        return a-b
    }
}