type 함수타입 = (a :string) => number;

let 함수5 :함수타입 = function (a){
    return 10
}

type 정보타입 = (a :number) => number;

type Member = {
    name : string,
    age : number,
    plusOne : ( x :number ) => number,
    changeName : () => void
}

let 회원정보 :Member = {
    name : 'kim',
    age : 30,
    plusOne(a) {
        return a + 1
    },
    changeName : () => {}
}

회원정보.plusOne(1)
회원정보.changeName()

function 함수1(a){
    a()
}
function 함수4(){

}
함수1(함수4)
