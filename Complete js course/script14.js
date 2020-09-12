// API  handing in java script but it is not valid in the js

// so  using fetch kayword we can test data and also fetch is not working in  node environment

fetch('https://api.chucknorris.io/jokes/random')
.then(response =>{
    console.log(response.json());
})
.catch(err =>{
    console.log(err)
}) 