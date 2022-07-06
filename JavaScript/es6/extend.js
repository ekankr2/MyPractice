
var 부모 = {name: 'Kim', age: 50}

var 자식 = Object.create(부모)
자식.age = 20
console.log(자식.age)

var 손자 = Object.create(자식)
console.log(손자.age)