var 학생1 = {
    name: 'Kim',
    age: 15,
    sayHi() {
        console.log('안녕하세요' + this.name + '입니다')
    }
}

학생1.sayHi()

function Student(이름) {
    this.name = 이름
    this.age = 15
    this.sayHi = function () {
        console.log('안녕하세요' + this.name + '입니다')
    }
}

var 학생1 = new Student('Park')
var 학생2 = new Student('Kim')

학생1.sayHi()
학생2.sayHi()


function Product (name, price) {
    this.name = name
    this.price = price
    this.부가세 = function () {
        console.log(this.price * 0.1)
    }
}

var product1 = new Product('shirts', 50000)
var product2 = new Product('pants', 60000)

product1.부가세()
