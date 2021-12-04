var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User() {
        this.x = 10;
    }
    return User;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser;
}(User));
var User2 = /** @class */ (function () {
    function User2() {
        this.intro = User2.skill + '전문가입니다';
    }
    User2.skill = 'js';
    return User2;
}());
var 영희 = new User2();
User2.skill = 'ts';
var 영희2 = new User2();
var Static = /** @class */ (function () {
    function Static() {
        this.z = 30;
    }
    Static.prototype.addOne = function (a) {
        return Static.x + a;
    };
    Static.x = 10;
    Static.y = 20;
    return Static;
}());
// let 스태틱 = Static.x
// let 스태틱2 = Static.y
// let 스태틱3 = Static.z
var Static2 = /** @class */ (function (_super) {
    __extends(Static2, _super);
    function Static2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Static2.prototype.do = function () {
        this.z = 20;
        Static2.y = 30;
    };
    return Static2;
}(Static));
