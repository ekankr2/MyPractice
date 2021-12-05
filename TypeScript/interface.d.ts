interface Square {
    color: string;
    width: number;
}
declare let 네모: Square;
declare type Animal1 = {
    name: string;
};
declare type Cat = {
    name: number;
} & Animal1;
interface Student {
    name: string;
}
interface Teacher extends Student {
    age: number;
}
declare let 학생: Student;
declare let 선생: Teacher;
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let 상품: Product;
interface Cart {
    product: string;
    price: number;
}
interface NewCart extends Cart {
    card: boolean;
}
declare let 장바구니: Cart[];
interface MathObj {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let PlusMinus: MathObj;
