/*

The drawPattern() function should accept number of rows as input.

  The function should return string that contains the pyramid structure for the number of rows inputted.

The pyramid structure should have the following pattern:

        *
       * *
      * * *
     * * * *
    * * * * *

The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.

*/

module.exports = function drawPattern(noOfRows) {
  // Provide Solution Code Here
  let string = '';
  if (typeof noOfRows !== typeof '') {
    // External loop
    for (let i = 1; i <= noOfRows; i++) {
      // printing spaces
      for (let j = 1; j <= noOfRows - i; j++) {
        string += ' ';

        // printing stars
        for (let k = 0; k < 2 * i - 1; k++) {
          string += '* ';
        }

        string += '\n';
        
      }

      console.log(string);
      
    }
  } else {
    return 'Invalid Input Type, Row Input Should Be of Type Number !!';
  }
};
