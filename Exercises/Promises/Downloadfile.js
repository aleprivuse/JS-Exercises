 function downloadFile(filename){
    return  new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(filename.length == 0 ){
                reject("this file cannot be downloaded")
            }
            else{
                resolve(`the file ${filename} has downloaded`)
            }
        }, 3000)
    })
}

downloadFile("hello").then(message => {console.log(message)})
               .catch(error => {console.log(error)})
               
console.log("downloading")
