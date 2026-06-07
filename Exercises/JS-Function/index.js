let button = document.getElementById("submit")
let result = document.getElementById("Result")

function EvenOrOdd(){
   
    let Userchoice = Number(document.getElementById("number").value)
    if(isNaN(Userchoice)){
      return "please put a number"
    }
    else if(Userchoice % 2 === 0){
        return "your number is even"
    }
    else{
        return "your number is Odd"
    }
      
}  
 
button.onclick = function(){
    result.innerText = EvenOrOdd()
}
