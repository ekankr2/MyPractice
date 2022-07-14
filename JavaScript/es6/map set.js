
// var person = new Map()
// person.set('name', 'Kim')
// person.set('age', 20)
//
// console.log(person.get('age'))
// console.log(person.size)

var 출석부 = ['john', 'tom', 'andy', 'tom']
var 출석부2 = new Set(출석부)
출석부2.add('sally')
console.log(출석부2.has('sally'))
console.log(출석부2)