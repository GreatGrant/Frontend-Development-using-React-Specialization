/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function calculateNetPayable(pricePerKilo, quantityInKilo, discountPercentage) {
  // Provide Solution Code Here
  let amountPayable = 0; 

  if (
    typeof(pricePerKilo) === typeof(amountPayable) ||
    typeof(quantityInKilo) === typeof(amountPayable) ||
    typeof(discountPercentage) === typeof(amountPayable)
  ){  
    const totalPrice = pricePerKilo * quantityInKilo;
    const discount = (discountPercentage * totalPrice) / 100;
    const amountPayable = totalPrice - discount;
    return amountPayable.toString();
  }else
    return 'Invalid Input Types, All Inputs Should Be of Type Number !!';
};