function 임시함수 () {
    return 10
}

function 더하기(a, b = 임시함수()) {
    console.log(a + b)
}

// 더하기(1)


function 함수(a, b, c){
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
}

함수(1, 2, 3)
