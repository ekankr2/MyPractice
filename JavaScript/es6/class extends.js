class 할아버지 {
    constructor(name) {
        this.성 = 'Kim'
        this.이름 = name
    }
    sayHi() {
        console.log('안녕 저는 할아버지에요')
    }
}

class 아버지 extends 할아버지 {
    constructor(name) {
        super(name);
        this.나이 = 50
    }
    sayHi() {
        console.log('안녕 저는 아버지에요')
        super.sayHi()
    }
}

var 아버지1 = new 아버지('만수')
아버지1.sayHi()