
var 프로미스 = new Promise(function (성공, 실패){
    setTimeout(function (){
        성공()
    }, 1000)
})

프로미스.then(function (결과){
    console.log('성공했어요')
}).catch(function (){
    console.log('실패했어요')
})