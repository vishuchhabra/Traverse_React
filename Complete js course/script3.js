// object in  java script 

var user = {
    firstName :"vishu chhabra",
    lastName :"chhabra",
    role:"Admin",
    loginCount:32,
    facebookSignedIn: true,
    courseList:[],
    buyCourse : function (name){
        this.courseList.push(name)
    }
}

// console.log(user.firstName)

// console.table(user)

//other way to access user 

// console.log(user["firstName"])

console.log(user)
user.buyCourse("vishu")
console.log(user) 


