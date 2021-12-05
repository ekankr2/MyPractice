declare class Persons {
    name: string;
    constructor(a: string);
    함수(a: string): void;
}
declare let 사람1: Persons;
declare let 사람2: Persons;
declare class Car {
    name: string;
    price: number;
    constructor(name: string, price: number);
    tax(): number;
}
declare let car1: Car;
declare class Word {
    num: any;
    str: any;
    constructor(...param: any[]);
}
declare let obj: Word;
