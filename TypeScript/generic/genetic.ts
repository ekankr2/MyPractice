function 함수g<MyType>(x :MyType[]) :MyType {
    return x[0]
}

let a = 함수g<number>([4,2])
let b = 함수g<string>(['4','2'])
console.log(a)

interface LengthCheck {
    length : number
}

function 함수2<MyType extends LengthCheck>(x : MyType){
    return x.length
}

let aa = 함수2<string[]>(['100'])

function hello<T extends string|string[]>(x :T){
    console.log(x.length)
}

hello<string>('hello')
hello<string[]>( ['kim', 'park'])

interface Animal {
    name : string;
    age : number
}

function stringify<T>(a:string) :T{
    return JSON.parse(a)
}

let data = '{"name" : "dog", "age" : 1 }'

let result = stringify<Animal>(data)

class Personss <T> {
    name;
    constructor(a :T){
        this.name = a;
    }
}
let ab = new Personss<string>('어쩌구');
ab.name //string 타입이 되었넹
