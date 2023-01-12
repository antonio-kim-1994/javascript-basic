class ClassFieldValue {
    constructor() {
        this.data = 0; //클래스 필드값
    }
}
class Persion {
    constructor(a) {
        this.name = a;
    }
    testFunc(a) {
        console.log('Hello ' + a);
    }
}
let people1 = new Persion('kim');
console.log(people1);
people1.testFunc('kim');
