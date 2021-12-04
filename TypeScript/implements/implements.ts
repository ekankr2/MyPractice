interface CarType {
    model : string,
    price : number
}


class Car implements CarType{
    model : string;
    price : number = 1000;
    constructor(a :string){
        this.model = a
    }
}
let 붕붕이 = new Car('morning');

export {}
