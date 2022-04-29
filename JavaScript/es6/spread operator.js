

var 어레이 = ['hello', 'world']
console.log(...어레이)

var 문자 = 'hello'
console.log(...문자)

// var a = [1,2,3]
// var b = [4, 5]
//
// var c = [...a, ...b]
//
// console.log(c)

// 같은 값을 갖게됨
var a = [1,2,3]
var b = a

a[3] = 4

console.log(a)
console.log(b)

var c = [1,2,3]
var d = [...c]

c[3] = 4

console.log(c)
console.log(d)

// 중복 발생 경우 뒤에 온 놈 적용
var o1 = { a : 1, b : 2}
var o2 = { a : 2, ...o1}
var o3 = { ...o1, a : 2}
console.log(o2)
console.log(o3)

