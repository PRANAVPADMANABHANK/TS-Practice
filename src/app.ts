let firstName:string = "hari"
let age:number = 20
let states:boolean = true
let money:undefined
let life:null = null
let cat:any = "false"

console.log(firstName, age, states, money, life, cat)
console.log(typeof(cat))

let Age : number
Age = 30

console.log(Age)

let Name : number = 10

let Names: [string, number] = ["next js", 40]

console.log(Names)

let arr: [string, number, boolean] = ["hello", 456,false]
console.log(arr)


let fn : string|boolean
fn = false
console.log(fn)


enum list{
    one = 3,
    two = 6,
    three = 1
}
console.log(list[1])