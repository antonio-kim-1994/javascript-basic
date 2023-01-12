// class : object 생성
// this : instance, 새로 생성되는 object
// commonJS
function machine(q, w){
    this.q = q;
    this.w = w;
}

const nunu = new machine('consume', 'snowball')
console.log(nunu)

// ES6
class newMachine {
    constructor(q, w){
        this.q = q;
        this.w = w;
    }
}

newMachine.prototype.name = 'kim'

const garen = new newMachine('strike', 'dash') // prototype chain
console.log(garen.name)
