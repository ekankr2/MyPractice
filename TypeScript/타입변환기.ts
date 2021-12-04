export {}

let obj = {name : 'kim', age : 20}
Object.keys(obj)

interface Person {
    [key :string] : number,
}

type PersonKeys = keyof Person
let a :PersonKeys = 'age'


type Car = {
    color : boolean,
    model : boolean,
    price : boolean | number
}

type TypeChanger<MyType> = {
    [key in keyof MyType] :string
}

type 새로운타입 = TypeChanger<Car>

type Bus = {
    color : string,
    model : boolean,
    price : number
}

type 변환기<T, MyType> = {
    [key in keyof T] :MyType
}

type newType = 변환기<Bus, string|number>
