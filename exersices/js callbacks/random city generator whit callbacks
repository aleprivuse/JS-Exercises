let name = window.prompt("put your name inside thankyou")
let age = window.prompt("put your age now ")

let place = Number(window.prompt("put the location you want to visit"))


greetuser(name, age, place,showConsole )

function greetuser(name,age,place,callback ){
    let city = ["Rome", "Paris", "Berlin", "Zürich" , "Madrid"]    
    let location = "";
    
    for(let i = 0; i < place; i++){
    randomcity = Math.floor(Math.random() * city.length)
        location += city[randomcity]
    }   
    
    let text = "Hello " + name + " you are " + age + " years old and you are goin to this location : "  + location    
    callback(text)
}
function showConsole(hopeitworks){
    console.log(hopeitworks)
}
