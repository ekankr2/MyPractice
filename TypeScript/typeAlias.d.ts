declare type Animals = string | number | undefined;
declare let 동물: Animals;
declare type Animal2 = {
    name: string;
    age: number;
};
declare let 동물2: Animal2;
declare const 출생지역: {
    region: string;
};
declare type Girlfriend = {
    readonly name: string;
};
declare const 여친: Girlfriend;
declare type Name = string;
declare type Age = number;
declare type Person1 = Name | Age;
declare type positionX = {
    x: number;
};
declare type positionY = {
    y: number;
};
declare type NewType = positionX & positionY;
declare let position: NewType;
declare type Xtype = {
    x: number;
};
declare type Xtype2 = {
    x: string;
};
declare type New = Xtype & Xtype2;
declare type CSS = {
    color?: string;
    size: number;
    readonly position: number[];
};
declare let 테스트용변수: CSS;
declare type PersonInfo = {
    name: string;
    phone: number;
    email: string;
};
declare type Child = {
    child: boolean;
};
declare type ChildCheck = PersonInfo & Child;
declare let 테스트용사람: PersonInfo;
declare let 미성년자: ChildCheck;
