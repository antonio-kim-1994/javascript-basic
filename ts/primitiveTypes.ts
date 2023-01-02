let myName :string = 'kim';
let age :number = 50;
let marrigedCheck :boolean = true;

let thisNull :null = null;
let thisUndefined :undefined = undefined;

let users :string[] = ['kim', 'park']
let usersObj :{ member1 :string, member2 :string } = { member1 : 'kim', member2 : 'park' }

let songInfo :{ name :string, singer :string } = { name : 'Bang!', singer: 'AJR' }
let project :{
    member :string[], 
    days :number, 
    started :boolean
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}

let thisMember :number | string = 'kim';
let thisMemberList :(number | string)[] = [1, '2', 3];
let thisMemberObj :{a : string | number} = { a : '123'};

let anyType :any; // type 실드 해제
anyType = 123;
anyType = true;

let unknowName :unknown;
let unionAge :string|number = 1;

let testUser :string = 'kim';
let testAge :undefined | number = undefined;
let married :boolean = false;
let tom :(string|number|undefined|boolean)[] = [testUser, testAge, married]

let school :{
    score :(number | boolean)[],
    teacher :string,
    friend :string[] | string
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
school.score[4] = false;
school.friend = ['Lee', school.teacher]