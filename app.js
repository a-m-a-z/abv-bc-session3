module.exports=
// function reverseString (string){
// 					/*
// 					This function returns null for a string input with length 0,
// 					it returns true for a string that is a pallindrome and a reversed string
// 					if neither a pallindrome nor an empty string.
// 					*/
// 					let lowerOfString=string.toLowerCase();// converting string to all lower case to make input none case sensitive
// 					let reversedString=lowerOfString.split('').reverse().join('');//reversing string
// 					if (string.length===0){
// 						return null
// 					}
//// 					if (lowerOfString===reversedString){
//// 						return true;
//// 					}else{
//// 						return reversedString;
// 					}
//
// 				}
function reverseString(input) {

     intake = input.toLowerCase().replace(/[^a-z0-9]+/g, '');
    let reverse =  intake.split('').reverse().join('');

          if (intake==="")
          {
            return null
          }else if (intake === reverse )
          {
            return true;
          }else
          {
              return reverse;
            }
}
