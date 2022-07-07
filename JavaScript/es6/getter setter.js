class 사람 {
    constructor() {
        this.name = 'Park'
        this.age = 20
    }
    get nextAge() {
        return this.age + 1
    }
    set setAge(나이) {
        this.age = 나이
    }
}

var 사람1 = new 사람()
사람1.setAge = 200
console.log(사람1)


// var 사람 = {
//     name : 'Park',
//     age : 30,
//     // return이 있어야한다.
//     get nextAge() {
//         return this.age + 1
//     },
//     // 파라미터 입력 필수
//     set setAge(age) {
//         this.age = parseInt(age)
//     }
// }
//
// 사람.setAge = '200'
//
// console.log(사람.nextAge)