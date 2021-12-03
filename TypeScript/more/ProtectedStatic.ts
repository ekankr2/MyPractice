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


class Static {
    private static x = 10;
    public static y = 20;
    protected z = 30;

    addOne(a){
        return Static.x + a
    }
}

// let 스태틱 = Static.x
// let 스태틱2 = Static.y
// let 스태틱3 = Static.z

class Static2 extends Static{
    do(){
        this.z = 20
        Static2.y =30

    }
}


