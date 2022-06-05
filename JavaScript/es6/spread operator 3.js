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

function 함수(a = 5, b = a * 2 ){
    console.log(a + b);
    return 10
}
함수(3);
