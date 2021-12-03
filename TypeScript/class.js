var Persons = /** @class */ (function () {
    function Persons(a) {
        this.name = a;
    }
    Persons.prototype.함수 = function (a) {
        console.log('안녕' + a);
    };
    return Persons;
}());
var 사람1 = new Persons('kim');
var 사람2 = new Persons('park');
사람1.함수('안녕');
console.log(사람1);
var Car = /** @class */ (function () {
    function Car(name, price) {
        this.name = name;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
// console.log(car1)
console.log(car1.tax());
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (i) {
            if (typeof i === 'string') {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
