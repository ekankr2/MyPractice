//
// var arr = [2,3,4]
//
// var [a,b,c = 10] = [2,3]

// var obj = { name : 'Kim', age: 30}
// var name = obj.name
// var age = obj.age

// var {name : 나이 = 'Park', age = 31} = { name : 'Kim'}
//
// console.log(나이)
//
// var name = 'Kim'
// var age = 30
//
// var obj = {name : name, age: age}
// var obj = {name, age}

var obj = { name: 'Kim', age: 30}

function 함수 ({name, age}) {
    console.log(name)
    console.log(age)
}

함수(obj)
