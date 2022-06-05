// var a = [1,2,3]
// var b = '김밥'
// var c = ['김', '밥', ...a]
// console.log(c) // ['김','밥',1,2,3]

// var a = [1,2,3];
// var b = ['you', 'are'];
// var c = function(a,b){
//     console.log( [[...a], ...[...b]][1] )
// }
// // [[1,2,3],'you','are'][1]
// c(a,b); // you

// function 함수(a = 5, b = a * 2 ){
//     console.log(a + b);
//     return 10
// }
// 함수(3);

// console.log(Math.max(5,6,4,3))
// var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7]
// console.log(Math.max(...numbers))


function 정렬(글자) {
    console.log([...글자].sort().join())
}

정렬('bear')

function 글자세기(글자){
    var 결과 = {};
    [...글자].forEach((a) => {
        if(결과[a] > 0) {
            결과[a] = 결과[a] + 1;
        } else {
            결과[a] = 1
        }
    })
    console.log(결과)
}

글자세기('aaaabbddd')
