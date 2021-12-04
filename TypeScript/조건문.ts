export {}

3 > 1 ? console.log('맞음') : console.log('아님')

type Age<T> = T extends string ? string : unknown

let a :Age<string>
let a2 :Age<number>

type FirstItem<T> = T extends [string, ...any] ? T[0] : unknown

let age1 :FirstItem<[string, number]>;
let age2 :FirstItem<[boolean, number]>;

type 타입추출<T> = T extends ( () => infer R ) ? R : unknown

type a = 타입추출< () => void >

type 타입뽑기<T> = T extends (x: infer R ) => any ? R : any

type b = 타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
type c = 타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음

