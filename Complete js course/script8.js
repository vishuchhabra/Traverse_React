// Understand what is bind in the java script 

var first ={
    name:"vishu chhabra",
    getInfo : function(){
        console.log(`your name is ${this.name}`)
    }
}

//second object
var second ={
    name:"Nakeri Ram"
}


//call the getInfo  for the first objct
first.getInfo()

//it will give refrence
var info= first.getInfo.bind(second)

//so  it will print 
info()