declare class User {
    protected x: number;
}
declare class NewUser extends User {
    doThis(): void;
}
declare class User2 {
    static skill: string;
    intro: string;
}
declare let 영희: User2;
declare let 영희2: User2;
declare class Static {
    private static x;
    static y: number;
    protected z: number;
    addOne(a: any): any;
}
declare class Static2 extends Static {
    do(): void;
}
