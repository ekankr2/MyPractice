
class 부모 {
    constructor() {
        this.name = 'Kim'
    }
    sayHi() {
        console.log('hello')
    }
}

var 자식 = new 부모()
console.log(Object.getPrototypeOf(자식))