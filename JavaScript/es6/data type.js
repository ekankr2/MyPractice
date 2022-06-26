var 변수 = 1234
var 어레이 = [1, 2, 3]
var obj = {name: 'Kim'}

var 이름1 = '김'
var 이름2 = 이름1

이름1 = '박'

// console.log(이름2)


var 이름3 = {name: '김'}
var 이름4 = 이름3

이름3.name = '박'

// console.log(이름3)
// console.log(이름4)

var name1 = {name: '김'}
var name2 = {name: '김'}

// console.log(name1 === name2) // false

function 변경(obj) {
    obj = { name : 'park'}
}

변경(name1)
console.log(name1)
