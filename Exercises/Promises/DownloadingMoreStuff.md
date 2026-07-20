 function downloadreport(name){
    return  new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(name.length == 0 ){
                reject("this file cannot be downloaded")
            }
            else{
                resolve(`the file ${name} has downloaded`)
            }
        }, 3000)
    })
}
 function downloadImage(name){
    return  new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(name.length == 0 ){
                reject("this file cannot be downloaded")
            }
            else{
                resolve(`the file ${name} has downloaded`)
            }
        }, 3000)
    })
}
 function downloadMusic(name){
    return  new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(name.length == 0 ){
                reject("this file cannot be downloaded")
            }
            else{
                resolve(`the file ${name} has downloaded`)
            }
        }, 3000)
    })
}

downloadreport("report.pdf").then(message => {console.log(message); return downloadImage("image.pdf")})
                            .then(message => {console.log(message); return downloadMusic("disk.mp3")})
                            .then(message => {console.log(message); console.log("you downloaded everything")})
                            .catch(error => console.log(error))
