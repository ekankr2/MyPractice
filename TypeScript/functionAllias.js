var 함수5 = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { }
};
회원정보.plusOne(1);
회원정보.changeName();
function 함수11(a) {
    a();
}
function 함수4() {
}
함수11(함수4);
