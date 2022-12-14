/*

The replaceString() function should accept 3 string inputs.

The function should search for second string in first string and if found should replace it with third string.

The function should return the replaced string.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type String !!", 
for any non-numeric value passed to the function.

*/

module.exports = function replaceString(inputString, searchString, replaceWith) {
  const newArray = []
  // Provide Solution Code Here
  if(typeof inputString === 'string' && typeof searchString === 'string' && typeof replaceWith === 'string'){
    
    const inputArray = inputString.split(' ')
    inputArray.forEach(input=>{
      if(input === searchString){
        input = replaceWith;   
        newArray.push(input);
      }else{
        newArray.push(input);
      }
    })

    return newArray.join(' ');
    

  }else{
    return 'Invalid Input Types, All Inputs Should Be of Type String !!'
  }

}