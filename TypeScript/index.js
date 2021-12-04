var 이름김 = 'kim';
var 나이 = 50;
var 결혼했니 = true;
var 회원들 = ['kim', 'park'];
var 사람들 = { member1: 'kim', member2: 'park' };
var myname = 'ekan';
var age = 26;
var from = 'korea';
var 노래 = { song: 'Home', name: 'park' };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
// Union Type
var 회원 = 123;
var 회원들2 = [1, '2', 3];
var 오브젝트 = { a: '123' };
// 타입쉴드 해제 문법
var 이름애니;
이름애니 = 123;
이름애니 = '123';
var 이름어농;
이름어농 = 123;
이름어농 = {};
// let 변수1 :string = 이름어농  ===> error
var 변수1 = 이름애니; // no error
// 이름 - 1  ===> error
var 나이2; // 유니온타입에는 +1 불가
// 나이2 + 1
// let 나이2 :unknown = 1;
// 나이2 - 1;
var user = 'kim';
var age2 = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
