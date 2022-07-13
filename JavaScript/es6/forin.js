class 부모 {

}

부모.prototype.name = "Park"

// var 오브젝트 = new 부모()
var 오브젝트 = {name: 'Kim', age: 30}
var 어레이 = [2, 3, 4, 5]
//
// for (var key in 오브젝트) {
//     if(오브젝트.hasOwnProperty(key)){
//         console.log(오브젝트[key])
//     }
// }

// for (var key of 어레이) {
//     console.log(key)
// }

let 데이터 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let i = 2

for (var key of 데이터) {

    console.log(`${i} x ${데이터[key]} = ${i*데이터[key]}`)
    i++
}