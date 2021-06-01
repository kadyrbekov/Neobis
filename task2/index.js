var fs = require('fs'); //importing a file system module
var arr;


arr = fs.readFileSync('input.txt');
arr = arr.toString();
arr = arr.split('\n');
//console.log(arr);


searchArr = fs.readFileSync('patterns.txt');
searchArr = searchArr.toString();
searchArr = searchArr.split('\n');
//console.log(searchArr);

// first mode: if any match then print
function getCommonItems1(array1, array2) {
    var common = []; 
    
    for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
        if (array1[i] == array2[j]) { 
          common.push(array1[i]);
        }
      }
    }
   
    return common; // Return the common items
  }

//console.log(getCommonItems1(arr,searchArr));


function getCommonItems2(array1, array2) {
    var common = []; 
    
    for (var i = 0; i < array2.length; i++) {
      for (var j = 0; j < array2.length; j++) {
        if (array2[i] == array1[j] && array2.indexOf(array2[i]) == array1.indexOf(array1[j])) { 
          common.push(array2[i]);
        }
      }
    }
   
    return common; // Return the common items
  }

console.log(getCommonItems2(arr, searchArr));
// first mode: if any match then print // bad try

// for(var i = 0; i < arr.length; i++){
//     console.log(i, arr[i], i)
//     if (arr.includes(searchArr[i])){
//         console.log(i, arr[i])
        
//     }
// }

// second mode: if position and string content match then print
// var j = 0;
// var i = 0;
// while(i < searchArr.length){
//     if (searchArr[i] == arr[j]){
//         console.log(searchArr[i])
//     }
//     i++;
// }

