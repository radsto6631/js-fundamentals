// Logical Operators

// Logical "AND"
console.log(true && true) // all values have to be True for expression to be True

// Logical "OR"
console.log(true || false) // any value should be True for the expression to be True

var ageIsMoreThanEighteen = true
var isUSCitizen = true

// || if any is true than the result is true. us citizen = true but not 18. still true
// && the whole statement need to be true

var eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('This customer is eligible for DL: ' +eligibilityForDriversLicense)

// Logical "NOT"
console.log(!true)
console.log(6 == 10)
console.log(6 !== 10)