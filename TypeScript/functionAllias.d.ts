declare type 함수타입 = (a: string) => number;
declare let 함수5: 함수타입;
declare type 정보타입 = (a: number) => number;
declare type Member = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};
declare let 회원정보: Member;
declare function 함수11(a: any): void;
declare function 함수4(): void;
