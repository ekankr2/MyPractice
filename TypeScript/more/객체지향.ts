class Users{
    name :string;
    private familyName :string = 'kim'
    constructor(a) {
        this.name = a + this.familyName
    }
    이름변경함수(){
        this.familyName = 'park'
    }
}

let 유저1 = new Users('민수')
유저1.이름변경함수()

class Person {
    constructor(public name :string) {

    }

}

let 자식 = new Person('kim')
