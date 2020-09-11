var counter = document.querySelector(".counter")

 //for followers
var  followers = document.querySelector(".followers") 

let count =1;

//simple   
setInterval(()=>{

    if(count<1000){
    count++;
    counter.innerHTML=count
    } 
},1)


//set time out
setTimeout(()=>{
        followers.innerHTML ="Followers on  Instgram"
},4000)



 