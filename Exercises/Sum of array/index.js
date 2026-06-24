

function sumArray(array) {
 let min= Math.min(...array)
 let max = Math.max(...array)
  let sum 
  let result = 0;
if(array.length <= 3){
  return 0
} 
else{
  for(let i = 0; array.length > i; i++){
    sum = array[i]
    result += sum
    
    
  }
}

 return result - min- max


}

console.log(sumArray([6,8]))
