/*

The generateRandomNumber() function should accept min and max as range boundary values.

The function should generate a random whole number in the given range and return it.

The function should return error message 'Incorrect Inputs. 1st value should be less than the second', 
if the min value is greater than or equal to max value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function generateRandomNumber(min, max) {
  // Provide Solution Code Here
  const num = 0;
  if (typeof min === typeof num || typeof max === typeof num) {
    if (min >= max) {
      return 'Incorrect Inputs. 1st value should be less than the second';
    } else {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  } else return 'Invalid Input Types, All Inputs Should Be of Type Number !!';
};
