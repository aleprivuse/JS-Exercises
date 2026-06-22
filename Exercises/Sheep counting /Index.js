
var countSheep = function (num){
  let count = num
  let result;
  let answer = ""
  for(let i = 1; count > i; i++){
   
  result = i + " sheep..."
   answer += result
  
  }
  return answer
}

console.log(countSheep(6))


