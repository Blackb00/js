function getSum() { 
var summa = 0; 
return function (n) { 
if(!n){ 
return summa; 
} 
return summa += n; 
}; 
}; 
var sum = getSum();