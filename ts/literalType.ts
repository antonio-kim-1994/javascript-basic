let literalTypeName: 'kim';

let iAm: 'student' | 'solo';

function testFunction1 (a: 'hello') :1 | 0 {
    return 1
}

type Game1 = '가위' | '바위' | '보'
function testFunction2 (userInput: Game1): Game1[]{
    return ['가위']
}

testFunction2('보')

// const 변수의 한계 : 변수를 재할당 하지 않도록 막지만, 내부의 값 변경을 막지는 않는다.
// const 변수의 확장성 한계 때문에 literal type을 사용한다.

let sample1 = {
    name: 'kim'
} as const // assertion 과는 다른 문법 ( name의 타입이 string에서 Kim으로 바뀐다. )

/**
 *  as const
 *  1. object의 속성을 value로 바꾼다.
 *  2. object 속성들에 모두 readonly를 붙여준다.
 */


function myFunction (a: 'kim'){ // 'kim'이라는 자료만 들어올 수 있다 X, 'kim' 이라는 타입만 들어올 수 있다 O

}

myFunction(sample1.name)