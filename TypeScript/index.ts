let 이름김 = 'kim';
let 나이 :number = 50
let 결혼했니 :boolean = true;

let 회원들 :string[] = ['kim', 'park']

let 사람들 :{ member1 : string, member2 : string } = { member1 : 'kim', member2 : 'park'}

let myname :string = 'ekan';
let age :number = 26;
let from :string = 'korea'

let 노래 :{ song : string, name : string} = { song : 'Home', name : 'park'}

let project :{ member : string[], days : number, started : boolean }= {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}
// Union Type
let 회원 :number | string = 123;

let 회원들2 :(number | string)[] = [1, '2', 3]
let 오브젝트 :{ a: string | number } = { a : '123'}

// 타입쉴드 해제 문법
let 이름애니 :any;
이름애니 = 123;
이름애니 = '123';

let 이름어농 :unknown;
이름어농 = 123;
이름어농 = {};

// let 변수1 :string = 이름어농  ===> error
let 변수1 :string = 이름애니 // no error

// 이름 - 1  ===> error

let 나이2 :string|number; // 유니온타입에는 +1 불가
// 나이2 + 1

// let 나이2 :unknown = 1;
// 나이2 - 1;

let user :string = 'kim';
let age2 :undefined | number = undefined;
let married :boolean = false;
let 철수 :(string|number|undefined|boolean)[]= [user, age, married];

let 학교 : {
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[]
}= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]
