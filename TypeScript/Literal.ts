
let 이름 : 123
이름 = 123
// 이름 = 456

let 접니다 : '대머리' | '솔로'
접니다 = '대머리'

function 함수는(a : 'hello') : (1 | 0){
    return 1
    // return 534
}
함수는('hello')

function 가위바위보(a : '가위' | '바위' | '보') : ('가위' | '바위' | '보')[]{

    return [a]
}
가위바위보('가위')

var 자료 = {
    name : 'kim'
} as const

function 내함수는(a : 'kim'){

}
// 자료.name = 123
내함수(자료.name)
