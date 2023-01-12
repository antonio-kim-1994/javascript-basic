// 터미널 명령어 tsc -w 를 통해 ts -> js 변환
let lastName = 'kim';
let nameArray = ['kim', 'park']; // array type
let nameObject = { name: 'kim' }; // Object type
let stringOrNumber = 123; // Union type
//function sampleFunction(x : x의 타입) :return 타입 {}
function sampleFunction(x) {
    return x * 2;
}
let john = [123, true];
// class
class User {
    constructor(name) {
        this.name = name;
    }
}
