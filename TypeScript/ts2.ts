
function 함수(x :number) :number {
    return x * 2
}

함수(6)
// 함수('6')
// 함수() parameter 없으면 에러남


function 함수2(x? :number) :void { //return 하는것 막아줌
    // return 1 + 1
}

함수2() // 물음표 > 들어올 수도 있다. ( | undefined 와 같음)

function 함수3(x :number | string) :void {
    if (x의 타입이 숫자면){
        console.log(x + 3)
    }

}
함수(2)

function Hello(name? :string) :void{
    if(name){
        console.log('안녕하세요 ',name)
    }else{
        console.log('이름이 없습니다.')
    }
}

function Length(x :number | string) :number{
    if(typeof x == "number"){
        return x.toString().length
    }
    return x.length
}

function Marry(income :number, house :boolean, charm :string) :void|string{
    let point :number;
    point += income

    if(house){
        point += 500
    }

    if(charm === '상'){
        point += 100
    }

    if(point >= 600){
        return '결혼가능'
    }
}
