// // spread and Rest keyward 
 
// var value =Math.max(2,5,7,4,98,9)

// console.log(value)


function sumOne(a,b){
    return  a+b
}

var myArray =[1,2]
console.log(sumOne(...myArray))    // spread operator 


function  sumTwo(...args){ //this is  rest operator 
    let sum =0
    for  ( const i of args){
        sum += i
    }
    return  sum;
}

//checkcing for whole array
var test =[1,2,3,4,5,6]
 
console.log(sumTwo(...test))
