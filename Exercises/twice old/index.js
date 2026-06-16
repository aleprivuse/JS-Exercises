
function twiceAsOld(dadYearsOld, sonYearsOld) {
  
  while(true){
    if(dadYearsOld == sonYearsOld * 2){
      return [newDadYears, newSonYears]
      
    }
    else{
     dadYearsOld = dadYearsOld + 1
      sonYearsOld = sonYearsOld + 1
    }
  }
}
console.log(twiceAsOld(15, 3))
