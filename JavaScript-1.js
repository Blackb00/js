function sum(a) { 
  let summa = a;  
  function getSumMore (b) {
    if(b){
      summa+=b;
      return getSumMore;
    }else{
      return summa;
    }
  }
  getSumMore.valueOf = function(){
    return summa;
  }
  getSumMore.toString = function(){
    return summa;    
  }
  return getSumMore;
}
