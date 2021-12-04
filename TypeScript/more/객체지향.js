var Users = /** @class */ (function () {
    function Users(a) {
        this.familyName = 'kim';
        this.name = a + this.familyName;
    }
    Users.prototype.이름변경함수 = function () {
        this.familyName = 'park';
    };
    return Users;
}());
var 유저1 = new Users('민수');
유저1.이름변경함수();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var 자식 = new Person('kim');
