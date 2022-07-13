var 심볼 = Symbol('설명')

var weight = Symbol('내 시크릿 몸무게임')
var height = Symbol('내 키임')

var person = {name: 'Kim', [height] : 160}
// person.weight = 100
// person[weight] = 200

for (var key in person) {
    console.log(person[key])
}

var 어레이 = [2,3,4]
console.log(어레이[Symbol.iterator])