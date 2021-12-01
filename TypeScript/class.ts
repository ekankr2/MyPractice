
class Person{

    name :string;

    constructor(a :string) {
        this.name = a
    }
    함수(a :string){
        console.log('안녕' + a)
    }
}

let 사람1 = new Person('kim')
let 사람2 = new Person('park')
사람1.함수('안녕')
console.log(사람1)

class Car{
    name:string
    price:number

    constructor(name:string, price:number) {
        this.name = name
        this.price = price
    }
    tax() :number{
        return this.price * 0.1
    }
}

let car1 = new Car('소나타', 3000)
// console.log(car1)
console.log(car1.tax())

class Word{
    num;
    str;

    constructor(...param) {
        let 숫자들 :number[]= []
        let 문자들 :string[]= []

        param.forEach((i)=>{
            if(typeof i === 'string'){
                문자들.push(i)
            }else{
                숫자들.push(i)
            }
        })
        this.num = 숫자들
        this.str = 문자들
    }
}

let obj = new Word('kim', 3, 5, 'park')
console.log(obj.num)
console.log(obj.str)
