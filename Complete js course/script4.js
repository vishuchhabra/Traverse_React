//looping in the java script 

var arr =[1,2,4,5,6,7,5,"vishu",6]

// //simple for loop
// for (let index = 0; index < arr.length; index++) {
//     if(typeof arr[index]!= "number"){
//         continue
//     }
//     console.log(arr[index])
    
// }

// let i=0;

// while (i<arr.length){>
//     console.log(arr[i])
//     i++;
// }


//same we have do  while loop 


// For each loop 

// arr.forEach(ele=>{
//     console.log(ele)
// }) 

// another way to  write 

// arr.forEach(function(val){
//     console.log(val)
// })


// for  Of loop in java script 

// for (const n of arr){
//     console.log(n)
// }

// for (let n of arr){
//     console.log(n)
// }

const user ={
    name:"vishu chhabra",
    class:"second year",
    age:"20 years"
}



// for  in  loop  in java script 
 
for (const n in  user){

    //it will print key as well  as values

    //example of the values
    console.log(user[n]) 
}