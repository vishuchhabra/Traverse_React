// //important terms in  the java script 

// //undefined
// var  user;
// console.log(user)

// // null
// user =null
// if(user){
//     console.log("If is working")
// }
// // NaN

// // 0

// // ""

// //falsy values are
// // undefined null "" 0 NaN

// difference between == and ===

// var val ="2"

// if(2==val){
//     console.log("First If is working")
// }

// if(2===val){
//     console.log("Second if is working")
// }



// Functions in java script 

// function  hello(){
//     console.log("Hello  there hitesh")
// }

// hello()

// var func = function(name){
//     console.log(`your name is ${name}`)
// }


// func("vishu chhabra")

//same above using arrow funtion 
// var func = (name)=>{
//     console.log(`your name is ${name}`)
// }


// func("vishu chhabra")

// var  first ;
// console.log(first)

// first ="vishu chhabra"
// console.log(first);


//for not a number (NaN)
// console.log(parseInt("a"))


  
// This is in java script
 
// console.log(this)

//Array in  the Java Script


var  name  =new Array("Rajasthan","Delhi","Mumbai")

console.log(typeof name)

console.log(name[0])

//printing the size of the array
console.log(name.length); 

name[0]="Punjab"

console.log(name)

//last element
console.log(name[name.length-1])

name.pop()
console.log(name)

// remove first element

//adding the value at front
name.unshift("vishu chhabra")
console.log(name)

//removing the first value by shifting all 
name.shift()
console.log(name)

//getting the indexing

console.log(name.indexOf("Punjab"))

//includes function
console.log(name.includes('this'))
    
console.log(name.includes('Punjab'))
 

t ="vishu chhabra"
console.log(Array.from(t))