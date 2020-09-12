//new keyword in  js 

// following will  give error

// var  user ={
//     name:"vishuchhabr"
// }

// var t = new user
// console.log(t)


// so  we will use function way of object
 
const User = function(name){
    this.name = name
    this.print = ()=>{
        console.log(`your name is ${this.name}`)
    }
}

// Also  we can define method outside the object

//also  arrow function are not working here 
User.prototype.printing = function (){

    console.log(`yeah proto  is working for ${this.name}`)
}

var test = new User("vishu chhabra")
 
console.log(test)

//priting the name
test.print() 

//checking condtion that name is existing or not
if(test.hasOwnProperty("name")){
    //if property exost then only we will print this one
    test.printing() 
}
