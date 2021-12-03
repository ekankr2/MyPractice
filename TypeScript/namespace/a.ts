export var 이름 = 'kim'
var 나이 = 20

export type Name = string


namespace 네임스페이스{
    export type Name2 = string|number
}

let 변수 :네임스페이스.Name2 = 'kim'



export type Car = {
    wheel : number,
    model : string
}
export interface Bike {
    wheel : 2,
    model : string
}

export type 함수저장 = (a? :object) => void

namespace 도그1{
    export type Dog = string;

}
namespace 도그2{
    export interface Dog { name : string };
}

let dog1 :도그1.Dog = 'bark';
let dog2 :도그2.Dog = { name : 'paw' }
