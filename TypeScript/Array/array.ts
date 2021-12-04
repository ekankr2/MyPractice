// let 멍멍 :(string|boolean)[] = ['dog', true]
let 멍멍 :[string, boolean?] = ['dog', true]

function 함수(...x :[number, string]){
    console.log(x)
}
함수(1,'2')

let arrr = [1,2,3]
let arrr2 :[number, number, ...number[]]= [4,5, ...arrr]

let 먹은거 :[string, number, boolean] = ['과자',2000, true]

let 녹차 :[string,number,...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true]

function 숙제(...x :[string, boolean, ...(number|string)[]]){

}

숙제('a', true, 6, 3, '1', 4)

function 분류기(...a :(number|string)[]) :[string[], number[]]{
    let result:[string[],number[]] = [[],[]]
    a.forEach((value)=>{
        if(typeof value === 'number'){
            result[1].push(value)
        }else{
            result[0].push(value)
        }
    })
    return result
}
분류기('b', 5, 6, 8, 'a')
