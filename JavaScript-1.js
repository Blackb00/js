function sum(a) { 
  let summa = a; 
  function getSumMore (b) {
    summa+=b;
    return getSumMore;
  }
  getSumMore.valueOf = function(){
    return summa;
  }
  getSumMore.toString = function(){
    return summa;    
  }
  return getSumMore;
}
