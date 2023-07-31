// .then promises
// https://randomuser.me/api/


//tell app to use axios
const axios = require('axios');



//this is a function that returns some stuff
const getContact = () => { 
    //this is a pattern we are going to use alot
//try something
    try {
//we want to hold this in a response
        //this is our fex, but in axios it is axios.get
        const res = axios.get(`https://randomuser.me/api/`)
//do the then promise
            //this api has a info section and a result section
        .then(res => {console.log(res.data.results)})
        //if it doesnt work, catch any errors
    } catch (e) {
        console.log("ERROR", e)
        
    }

}
// console.log(getContact())

//async/away promises
// StarWars API  https://swapi.dev/api/people <- add an id to get a specific person. 


const getStarWarsPerson = async (id) => {

    try {
        const res = await axios.get(`https://swapi.dev/api/people${id}`)
        console.log(res.data)
    } catch(e) {
        console.log("ERROR", e)
    }
}

console.log(getStarWarsPerson(7))

