// type Square = { color : string, width : number}
interface Square {
    color : string,
    width : number
}

let 네모 :Square= { color : 'red', width : 100}

type Animal1 = { name : string }
type Cat = { name : number } & Animal1

interface Student {
    name : string
}// 중복선언 가능
// interface Student {
//     score : number
// }
// interface Teacher  {
//     name : string,
//     age : number
// }
interface Teacher extends Student{
    age : number
}
// extends 로 복사가능
let 학생 :Student= { name : 'kim'}
let 선생 :Teacher= { name : 'kim', age : 20 }

interface Product {
    brand : string,
    serialNumber : number,
    model : string[]
}
let 상품:Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

interface Cart {
    product : string,
    price : number
}
interface NewCart extends Cart{
    card : boolean
}
let 장바구니 :Cart[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]

interface MathObj{
    plus : (a:number, b:number) => number,
    minus : (a:number, b:number) => number
}
let PlusMinus :MathObj ={
    plus(a, b){
        return a + b
    },
    minus(a, b){
        return a - b
    }
}
