function betterThanAverage(classPoints, yourPoints) {
  let Avarageclass = 0
  let resultPointsClass = 0;
  let Classsum
  for(let i = 0; classPoints.length > i ; i ++){
    let x = 0
    x++
    Classsum = classPoints[i]
    resultPointsClass += Classsum
    Avarageclass += x
  }
 
  resultPointsClass = resultPointsClass/ Avarageclass
  //console.log(resultPointsClass)






  if(resultPointsYours > resultPointsClass){
    return true
  }
  else {
    return false
  }
  
}
