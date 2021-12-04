var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function 함수1235() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수1235(1, 5, 3, 5, 6, 6);
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
// let arrr = ['안녕', 100]
var _a = ['안녕', 100], 변수11 = _a[0], 변수22 = _a[1];
var _b = { student: true, ages: 20 }, student = _b.student, ages = _b.ages;
var 오브젝 = { student: true, age: 20 };
// function 함수1(a, b){
//     console.log(a, b)
// }
function 함수10(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
// 함수(1,2)
// 함수1({ student : true, age : 20})
함수10(오브젝);
function 최대값() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    num.forEach(function (a) {
        var max = 0;
        if (a > max) {
            max = a;
        }
        return max;
    });
}
최대값(6, 3, 7, 2);
var 믹스 = { user: 'kim', comment: [3, 5, 4], admin: false };
function 믹스함수(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
믹스함수(믹스);
var 와인 = [40, 'wine', false];
function 와인함수(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
와인함수(와인);
