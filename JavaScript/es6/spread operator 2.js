
function 더하기(a, b, c){
    console.log(a + b + c)
}

var 어레이 = [10, 20, 30]
더하기(어레이[0], 어레이[1], 어레이[2])

더하기.apply(undefined, 어레이)
더하기(...어레이)

 var person = {
    인사 : function (){
        console.log(this.name + '안녕')
    }
 }

 var person2 = {
    name: '손흥민'
 }

 person.인사()
 person.인사.apply(person2)
 person.인사.call(person2)
