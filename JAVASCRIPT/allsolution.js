// !NO ODDITIES HERE KATA ( return the values of an array that are not odd)
solution 1 :

function noOdds( values ){
  
  return values.filter( number => number % 2 === 0);
  
}

solution 2: 

function noOdds( values ) {
  const arr = []
  for (let i = 0; i < values.length; i++) {
    if(values[i] % 2 === 0) {
      return arr.push(values[i]);
    }
  }
  return arr;
}


([0,1,2,3] , [0,2])


// !Return two function that return from an arrray the min and max values ;

var min = function(list){
  return Math.min(...list);
}

var max = function(list){
  
  return Math.max(...list);
}

[-52, 56, 30, 29, -54, 0, -110]
[4,6,2,1,9,63,-134,566]