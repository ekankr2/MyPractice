declare function 함수1235(...a: number[]): void;
declare let arr: number[];
declare let arr2: number[];
declare let arr3: number[];
declare let 변수11: string, 변수22: number;
declare let student: boolean, ages: number;
declare let 오브젝: {
    student: boolean;
    age: number;
};
declare function 함수10({ student, age }: {
    student: boolean;
    age: number;
}): void;
declare function 최대값(...num: number[]): void;
declare type UserType = {
    user: string;
    comment: number[];
    admin: boolean;
};
declare let 믹스: UserType;
declare function 믹스함수({ user, comment, admin }: UserType): void;
declare let 와인: (number | string | boolean)[];
declare function 와인함수([a, b, c]: (number | string | boolean)[]): void;
