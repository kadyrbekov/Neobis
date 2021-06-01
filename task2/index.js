var fs = require('fs'); //importing a file system module
var arr;

var stringSimilarity = require("string-similarity");

//var similarity = stringSimilarity.compareTwoStrings("healed", "sealed");

arr = fs.readFileSync('input.txt');
arr = arr.toString();
arr = arr.split('\n');
//console.log(arr);


searchArr = fs.readFileSync('patterns.txt');
searchArr = searchArr.toString();
searchArr = searchArr.split('\n');
//console.log(searchArr);

// !!!first mode: if any match then print
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

// !!!!second mode: if position and string content match then print
// for (i = 0; i < arr.length; i++) 
// {
//     if (arr[i] == searchArr[i])
//     {
//         console.log(arr[i])
//     }
// }

// !!!third mode
function CompareStrings( stringToCheck1, stringToCheck2)
{
   

    var counter = 0;
    for (var i = 0; i < stringToCheck1.length; i++)
    {
        if (stringToCheck1[i] != stringToCheck2[i])
        {
            counter++;
        }
    }
    if (counter > 1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

for (i = 0; i < arr.length; i++) 
{
    if (CompareStrings(arr[i],searchArr[i]))
    {
        console.log(arr[i])
    }
}






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

