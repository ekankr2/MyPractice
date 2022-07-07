// class 사람 {
//     constructor() {
//         this.name = 'Park'
//         this.age = 20
//     }
//     get nextAge() {
//         return this.age + 1
//     }
//     set setAge(나이) {
//         this.age = 나이
//     }
// }
//
// var 사람1 = new 사람()
// 사람1.setAge = 200
// console.log(사람1)


var 사람 = {
    name : 'Park',
    age : 30,
    get nextAge(){
        return this.age + 1
    },
    set setAge(age){
        this.age = age
    }
}

console.log(사람.nextAge)