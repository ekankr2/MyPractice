function 함수123(...a :number[]){
    console.log(a)
}
함수123(1,5,3,5,6,6)

let arr = [1,2,3]
let arr2 = [4,5]
let arr3 = [...arr, ...arr2]

// let arrr = ['안녕', 100]
let [변수11, 변수22] = ['안녕', 100]

let { student, ages } = { student : true, ages : 20}
let 오브젝 = { student : true, age : 20}

// function 함수1(a, b){
//     console.log(a, b)
// }

function 함수10({student, age} :{student:boolean, age:number}){
    console.log(student, age)
}

// 함수(1,2)
// 함수1({ student : true, age : 20})
함수10(오브젝)

function 최대값(...num:number[]){
    num.forEach((a)=>{
        let max = 0
        if(a > max){
            max = a
        }
        return max
    })
}

최대값(6,3,7,2)

type UserType = {
    user : string,
    comment : number[],
    admin : boolean
}

let 믹스:UserType = { user : 'kim', comment : [3,5,4], admin : false }
function 믹스함수({user, comment, admin}:UserType){
    console.log(user, comment, admin)
}
믹스함수(믹스)

let 와인:(number|string|boolean)[] = [40, 'wine', false]

function 와인함수([a,b,c]:(number|string|boolean)[]){
    console.log(a,b,c)
}
와인함수(와인)
