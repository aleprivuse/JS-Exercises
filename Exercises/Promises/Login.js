function loggeIn(username, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const RealPassword = 12345;
            const RealUsername = "steve";
        if(username === RealUsername && password === RealPassword){
            resolve("you logged in")
        }
        else{
            reject("your credentials are wrong")
        }}, 3000)
       
    })
}

loggeIn("steve", 12346).then(message => {console.log(message)})
                        .catch(error => console.log(error))

console.log("trying to load")
