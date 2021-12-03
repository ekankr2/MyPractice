class User{
    protected x = 10;
}

class NewUser extends User{
    doThis(){
        this.x = 20
    }
}

class User2{
    static skill = 'js'
    intro = User2.skill + '전문가입니다'
}

let 영희 = new User2()

User2.skill = 'ts'

let 영희2 = new User2()


