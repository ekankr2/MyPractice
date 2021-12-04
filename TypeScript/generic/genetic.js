function 함수g(x) {
    return x[0];
}
var a = 함수g([4, 2]);
var b = 함수g(['4', '2']);
console.log(a);
function 함수2(x) {
    return x.length;
}
var aa = 함수2(['100']);
function hello(x) {
    console.log(x.length);
}
hello('hello');
hello(['kim', 'park']);
function stringify(a) {
    return JSON.parse(a);
}
var data = '{"name" : "dog", "age" : 1 }';
var result = stringify(data);
var Personss = /** @class */ (function () {
    function Personss(a) {
        this.name = a;
    }
    return Personss;
}());
var ab = new Personss('어쩌구');
ab.name; //string 타입이 되었넹
