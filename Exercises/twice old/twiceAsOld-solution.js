
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let time= 0;
  while(true){
    if(dadYearsOld == sonYearsOld * 2){
      return time
    }
    else{
     dadYearsOld = dadYearsOld + 1
    sonYearsOld = sonYearsOld + 1
      time++
    }
  }
}
