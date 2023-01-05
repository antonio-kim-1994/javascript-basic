let literalTypeName;
let iAm;
function testFunction1(a) {
    return 1;
}
function testFunction2(userInput) {
    return ['가위'];
}
testFunction2('보');
// const 변수의 한계 : 변수를 재할당 하지 않도록 막지만, 내부의 값 변경을 막지는 않는다.
// const 변수의 확장성 한계 때문에 literal type을 사용한다.
let sample1 = {
    name: 'kim'
}; // assertion 과는 다른 문법 ( name의 타입이 string에서 Kim으로 바뀐다. )
/**
 *  as const
 *  1. object의 속성을 value로 바꾼다.
 *  2. object 속성들에 모두 readonly를 붙여준다.
 */
function myFunction(a) {
}
myFunction(sample1.name);
