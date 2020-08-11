//const and let 

// var name = "John"


// //exception in the object
 
// const person = {
// name :"Vishu chhabra",
// age : "37"
// }

// person.age = 67

// console.log(person)


// const nums = [ 1,2,4,5,67]

// nums.push(567)

// console.log(nums)


// //arrow function 


// // function  hello(){
// //     console.log('hello')
// // }

// // hello()

// //in arrow form

// const hello = (name) =>console.log(name)

// hello("This is khan")

// //forEach loop  in js

// let  fruits = ["vishu","chhabra","is","great"]
// fruits.forEach((ele,index)=>{
//     console.log(ele , index )
// })

// //map is similer to forEach just it return in array

// //eg  //slice is used for cutting the peice of elements n array 

// const mapF   = fruits.map((fruit)=>fruit.slice(0,-1).toUpperCase())
// console.log(mapF)


// //filter

// const people =[
//     {id:1,name : "vishu chhabra"},
//     {id:2,name : "vishu chhabra"},
//     {id:3,name : "vishu chhabra"},
//     {id:4,name : "vishu chhabra"}
// ]

// const people2 = people.filter(person => person.id!==2) 


// console.log(people2)
 

// //spread in ES6

// const arr = [1,2,3]

// const arr2 = [...arr ,4] //three dots here spreading everthing in arr2 from arr   //basically makes copy of arr to arr2 
// console.log(arr2)


// const person1  ={
//     name :"vishu chhabra",
//     age:19
// }

// const newPerson  ={
//     ...person1 ,
//     email:"vish@gmail.com"
// }

// console.log(newPerson)

//combination of the spread and filter in js

// const arr = [1,2,3]
// const arr2 = [...arr ,4]
// const arr3 =[...arr.filter(num =>num !=2),45]

// console.log(arr3)

//destructuring is very easy and already familier with this.

//classes 

//class
// class Person{

//     //these are the properties
//     constructor(name, age){
//         this.name= name,
//         this.age =age
//     }
//     //methods
//     great(){
//         return  `My name is ${this.name}`
//     }

     
// }


// const person1 = new Person('vishu chhabra',34)
// console.log(person1.great(),person1.age)


// //subclass

// class Customer extends Person {
//    constructor(name,age,balence){
//        super(name , age ) //super is used to call the constructor of parent class
//        this.balence = balence
//    }

//    info(){
//       return `${this.name} and ${this.balence}` 
//    }
// }

// const customer1 = new Customer("Kelvin",32,300)

// console.log(customer1.info())


//modules 

//already famiier with this

//file1 
// export const name ="vishu chhabra"
// export const nums =[1,2,3]
// export default Person //for class
// //file2

// import {name , nums} from './file1'

// import Person from  './file1'







   






