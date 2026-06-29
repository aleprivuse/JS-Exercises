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
  let AvarageYours = 0
  let resultPointsYours = 0;
  let Yoursum;

  for(let i = 0; yourPoints.length > i ; i ++){
    let x = 0
    x++
    Yoursum = yourPoints[i]
    resultPointsYours += Yoursum
    AvarageYours += x
    
  }
  
resultPointsYours = resultPointsYours / AvarageYours
//console.log(resultPointsYours)




  if(resultPointsYours > resultPointsClass){
    return true
  }
  else {
    return false
  }
  
}


console.log(betterThanAverage([2,4,8,10],[2,4,8,16]))
