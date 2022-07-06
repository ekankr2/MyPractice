function 기계(){
    this.name = 'Kim';
    this.age = 15;
}

기계.prototype.gender = '남'

var 학생1 = new 기계();
var 학생2 = new 기계();

var 부모 = { name : 'Kim'}
var 자식 = {}

자식.__proto__ = 부모
console.log(자식.name)

function 학생(이름, 나이) {
    this.name = 이름
    this.age = 나이
    this.sayHi = function (){
        console.log(`안녕 나는 ${this.name}이야`)
    }
}