class ClassFieldValue {
    data = 0; //클래스 필드값
}

class Persion {
    name: string; // this.name을 사용하기 위해 변수를 필드값으로 선언해야 한다.
    constructor(a: string) { // Object를 만들기 때문에 return 타입 지정 X
        this.name = a;
    }
    testFunc(a: string) {
        console.log('Hello ' + a);
    }
}

let people1 = new Persion('kim')
console.log(people1)
people1.testFunc('kim')