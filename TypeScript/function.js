function 함수1234(x) {
    return x * 2;
}
함수1234(6);
// 함수('6')
// 함수() parameter 없으면 에러남
function 함수20(x) {
    // return 1 + 1
}
함수20(); // 물음표 > 들어올 수도 있다. ( | undefined 와 같음)
function 함수3(x) {
    // if (x의 타입이 숫자면){
    //     console.log(x + 3)
    // }
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
함수1234(2);
function Hello(name) {
    if (name) {
        console.log('안녕하세요 ', name);
    }
    else {
        console.log('이름이 없습니다.');
    }
}
function Length(x) {
    if (typeof x == "number") {
        return x.toString().length;
    }
    return x.length;
}
function Marry(income, house, charm) {
    var point = 0;
    point += income;
    if (house) {
        point += 500;
    }
    if (charm === '상') {
        point += 100;
    }
    if (point >= 600) {
        return '결혼가능';
    }
}
function 내함수(x) {
    var array = [];
    // array[0] = x;
    if (typeof x === "number") {
        array[0] = x;
    }
    array[0] = x; // assertion
    // 타입 변경할 때 쓰면 안됨
    // 무슨타입이 들어올지 확실할 때 써야함
    // 정말 필요할 때 써야함.
}
내함수('123');
var 이름은 = 'kim';
// 이름은 as number;
function 클리닝함수(x) {
    var cleaned = [];
    x.forEach(function (a) {
        if (typeof a === 'string') {
            cleaned.push(parseFloat(a));
        }
        else {
            cleaned.push(a);
        }
    });
    return cleaned;
}
클리닝함수(['1', 2, '3']);
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function 과목(teacher) {
    if (typeof teacher.subject === 'string') {
        return teacher.subject;
    }
    else if (Array.isArray(teacher.subject)) {
        return teacher.subject[teacher.subject.length - 1];
    }
    else {
        return '없져';
    }
}
