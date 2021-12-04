var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// let 멍멍 :(string|boolean)[] = ['dog', true]
var 멍멍 = ['dog', true];
function 함수() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
함수(1, '2');
var arrr = [1, 2, 3];
var arrr2 = __spreadArray([4, 5], arrr, true);
var 먹은거 = ['과자', 2000, true];
var 녹차 = ['동서녹차', 4000, true, false, true, true, false, true];
function 숙제() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
}
숙제('a', true, 6, 3, '1', 4);
function 분류기() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var result = [[], []];
    a.forEach(function (value) {
        if (typeof value === 'number') {
            result[1].push(value);
        }
        else {
            result[0].push(value);
        }
    });
    return result;
}
분류기('b', 5, 6, 8, 'a');
