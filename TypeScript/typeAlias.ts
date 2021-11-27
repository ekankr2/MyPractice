
type Animal = string | number | undefined;

// let 동물 :string | number | undefined;
let 동물 :Animal = 123;

type Animal2 = { name : string, age : number }
// let 동물2 :{ name : string, age : number } = { name : 'kim', age : 20}
let 동물2 :Animal2 = { name : 'kim', age : 20}

const 출생지역 = { region : 'seoul' }
출생지역.region = 'busan' //object 변경은 막지못함

type Girlfriend = {
    readonly name : string
}

const 여친 :Girlfriend = {
    name : '엠버'
}

// 여친.name = '유라'

type Name = string;
type Age = number;
type Person = Name | Age

type positionX = { x : number }
// type positionX = number; // 재정의 불가능
type positionY = { y : number }

type NewType = positionX & positionY // extend

let position :NewType = { x : 10, y : 20}

type Xtype = { x : number }
type Xtype2 = { x : string }

type New = Xtype & Xtype2

type CSS = {
    color? : string,
    size : number,
    readonly position : number[]
}

let 테스트용변수 :CSS = {
    size : 123,
    position : [1,2,3]
}

type PersonInfo = {
    name : string,
    phone : number,
    email : string,
}

type Child = {
    child : boolean
}

type ChildCheck = PersonInfo & Child

let 테스트용사람 :PersonInfo = {
    name : 'kim',
    phone : 123,
    email : 'abc@naver.com'
}

let 미성년자 :ChildCheck = {
    name : 'miza',
    phone : 123123,
    email : 'aaa@naver.com',
    child : true
}
