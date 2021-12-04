interface StringOnly {
    [key :string] : string | number
}

let user :StringOnly= {
    0 :'kim',
    1 : '20',
    2 : 'seoul'
}
user[0]

interface MyType {
    'font-size' : MyType | number
}

let css :MyType = {
    'font-size' : {
        'font-size' : {
            'font-size' : 14
        }
    }
}

interface Obj  {
    [key:string]  : string|number
}

let obj = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
}

interface Object {
    'font-size' : number,
    [key:string] : Object | number
}

let obj2:Object = {
    'font-size' : 10,
    'secondary' : {
        'font-size' : 12,
        'third' : {
            'font-size' : 14
        }
    }
}

export {}
