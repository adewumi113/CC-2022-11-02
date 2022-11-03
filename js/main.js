
//https://www.codewars.com/kata/55908aad6620c066bc00002a



// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO (str){
  str = str.toLowerCase()
  let numOfX = 0
  let numOfO = 0
  for (i = 0; i < str.length; i++){
      if (str[i] == 'x') {
          numOfX += 1
      }else if(str[i] == 'o'){
          numOfO += 1
      }
  }
  if (numOfX == numOfO) {
      return true
  }else{
      return false
  }
}
XO("ooxXm"); //true

//shorter solution

function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

