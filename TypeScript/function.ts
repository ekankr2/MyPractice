
function 함수12(x :number) :number {
    return x * 2
}

함수12(6)
// 함수('6')
// 함수() parameter 없으면 에러남


function 함수2(x? :number) :void { //return 하는것 막아줌
    // return 1 + 1
}

함수2() // 물음표 > 들어올 수도 있다. ( | undefined 와 같음)

function 함수3(x :number | string) { // typenarrowing 필요
    // if (x의 타입이 숫자면){
    //     console.log(x + 3)
    // }
    if (typeof x === 'string'){
        return x + '1'
    } else {
        return x + 1
    }
}
함수12(2)

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
    let point :number = 0;
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

function 내함수(x :number|string){

    let array :number[] = []
    // array[0] = x;
    if(typeof x === "number"){
        array[0] = x;
    }

    array[0] = x as number // assertion
    // 타입 변경할 때 쓰면 안됨
    // 무슨타입이 들어올지 확실할 때 써야함
    // 정말 필요할 때 써야함.
}

내함수('123')

let 이름은 :string = 'kim'
// 이름은 as number;

function 클리닝함수(x :(number|string)[]) :number[]{

    let cleaned :number[] = []
    x.forEach((a)=>{
        if(typeof a === 'string'){
            cleaned.push(parseFloat(a))
        }else{
            cleaned.push(a)
        }
    })
    return cleaned
}

클리닝함수( ['1', 2, '3'] )

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function 과목(teacher :{subject : string | string[]}){
    if(typeof teacher.subject === 'string'){
        return teacher.subject
    }else if(Array.isArray(teacher.subject)){
        return teacher.subject[teacher.subject.length - 1]
    }else{
        return '없져'
    }
}
