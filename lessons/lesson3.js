//object is an entity that can hold multiple values at the same time

//object

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"] 
}

//print ways
console.log(customer)
console.log(customer.firstName)
console.log(customer['firstName'])
console.log(`${customer.firstName} ${customer.lastName}`)

//change values ways
customer.firstName = "Mark"
customer['lastName'] = "Tester"
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays is an entity which is a list of items that you want to save / they are plased inside the array in order

//arrays

var car = ["Volvo", "Toyota", "Tesla"]
car[1] = "BMW" 
console.log(car[0])

//print cars of customer from above
console.log(customer.cars[0])




