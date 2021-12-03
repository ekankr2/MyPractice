function 함수<MyType>(x :MyType[]) :MyType {
    return x[0]
}

let a = 함수<number>([4,2])
let b = 함수<string>(['4','2'])
console.log(a)

interface LengthCheck {
    length : number
}

function 함수2<MyType extends LengthCheck>(x : MyType){
    return x.length
}

let aa = 함수2<string[]>(['100'])
