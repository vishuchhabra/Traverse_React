//self executive anonymous function in  js 

//example
// (function (){
//     console.log("This is vishu chhabra")
// })() 


//example of clousre
function  add(x){
    return function (y){
        return  x+y;
    }
}


var add5 = add(67)
console.log(add5(20))

//another method to  print the result 
console.log(add(34)(23))