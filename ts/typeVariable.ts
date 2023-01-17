// type 키워드 재정의 불가능
type Animal1 = string | number | undefined;
type Animal2 = { name: string, age: number}

let animal: Animal1 = 123;
let animalObject: Animal2 = { name: 'kim', age: 20}

type Girlfriend = {
    readonly name: string // readonly를 사용할 경우 Object 내부의 값을 바꿀 수 없다. (속성 Lock)
}

const girfriend: Girlfriend = {
    name: '엠버'
}

// ts의 에러는 실행을 막는 것이 아니다. 단순히 문제가 있음을 알려주는 것.

type Name = string;
type Age = number;
type Person = Name | Age; // type 합치기

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

// test
type ObjType = { 
    color?: string, 
    size: number, 
    readonly position: number[]
};

type CheckType = {
    name: string,
    phone: number,
    email: string,
};

type CheckUser = {
    name: string,
    phone: number,
    email: string,
}

type Adult = {
    adult: boolean
}

type NewUser = CheckUser & Adult