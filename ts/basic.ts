// 터미널 명령어 tsc -w 를 통해 ts -> js 변환

type Sample = string | number;

let lastName :string = 'kim';
let nameArray :string[] = ['kim', 'park'] // array type
let nameObject : { name? : string } = { name : 'kim'} // Object type

let stringOrNumber : Sample = 123; // Union type

//function sampleFunction(x : x의 타입) :return 타입 {}
function sampleFunction(x :number) :number {
    return x * 2
}

// type - tuple type
type Member = [number, boolean];
let john :Member = [123, true]

// type - Object type
type MemberObj = {
    [key :string] : string, // [key :string] => 모든 오브젝트 유형
}

// class
class User {
    name :string;
    constructor(name :string){
        this.name = name;
    }
}