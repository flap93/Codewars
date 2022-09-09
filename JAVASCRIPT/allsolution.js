// *NO ODDITIES HERE KATA ( return the values of an array that are not odd)
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


// !*Return two function that return from an arrray the min and max values ;

var min = function(list){
  return Math.min(...list);
}

var max = function(list){
  
  return Math.max(...list);
}

[-52, 56, 30, 29, -54, 0, -110]
[4,6,2,1,9,63,-134,566]


// * A function that always returns 5 but without numbers

function unusualFive() {
  return 'fucku'.length
}



// *return true if the first and last letter of a WORD  match with the first letter and last letter of the second WORD

function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}



// * https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript
//* contar solo las vocales de las palabras






// https://www.codewars.com/kata/583d972b8bbc0402cf000121/javascript  kyu6




// https://www.codewars.com/kata/59a1cdde9f922b83ee00003b/train/javascript


//  6 solution :


function stantonMeasure(array){
  const count = (n) => array.filter(x => x === n).length;
  return count(count(1));
}

//  5 solution :

// function stantonMeasure(array,value){
//     const countOne = array.filter(e => e === 1).length;
//     return array.filter(e => e === countOne).length;
//   }


// 4  solution 

// function stantonMeasure(array,value){
//     const countOne = array.filter(e => e === 1).length;
//     const xLength = array.filter(e => e === countOne).length;

//     return xLength;

//   }


// third  solution : 

// function stantonMeasure(array,value){
//     let countOne = 0;
//     for(i = 0; i < array.length; i++){
//         if(array[i] === 1){countOne++}
//     }

//   const x = array.filter(e => e === countOne);
//   const xLength = x.length

//   return xLength;

//   }

// second solution : 

// function stantonMeasure(array,value){
//     let countOne = 0;
//     for(i = 0; i < array.length; i++){
//         if(array[i] === 1){countOne++}
//     }

//   let xTimes = 0;
//     for(i = 0; i < array.length; i++){
//         if(array[i] === countOne){xTimes++}
//     }
//     return xTimes;
// }

//  first solution:

// function stantonMeasure(n, out) {

//   const times =  n.filter( one => one === 1 )
//   const number = times.length;
//   const x = n.filter(e => e === number);
//   const xLength = x.length
//   return xLength;

// }


//                  filter  1
//                 count 1
//                   x = 
                
//                   for 
//                   count
//                   ==
// que devuelva 1 
// cuantas veces se repitio
// ese numero que se repitio cuantas se repite 


// el contador se va a llamar n
// la medida es el numero de veces que aparece en el array

// cuantas veces


//////////////////////////////////////////////////////////////////////////////////////////////////////////


// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

// Suma de dos  arrays  
// metodo utilizado: REDUCE 
// Proceso de la logica :
//  un metodo que recorra todo el array sumando sus elementos  y de ahi sumarlo con el otro array

// mi solution: 

function arrayPlusArray(arr1, arr2) {
  const sumOne= arr1.reduce((a,b) => a + b);
  const sumTwo = arr2.reduce((a, b) => a + b);
  
  return sumOne + sumTwo;
}

//  best solution :

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}


//////////////////////////////////////////////////////////////////////////////////////////////