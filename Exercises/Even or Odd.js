const zahlen = [5, 7, 15, 14, 20, 30]

let geradezahlen = zahlen.filter(function gerade(zahlen){let number = zahlen % 2 == 0; return number}).map(function multiply(zahlen, number){let result = zahlen * 2 ; return result})


console.log(geradezahlen)
