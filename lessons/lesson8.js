// Declerative functions
//helloOne() can be called anywhere in the file
helloOne()
function helloOne(){
    console.log('Hello one!')
}
helloOne()

// Anoymus function doesnt have a name
// Function need to be assigned to something
// Function need to be defined first to run
var hellowTwo = function(){
    console.log('Hello two!')
}
hellowTwo()

// Arrow Function 
var helloThree = () => {
    console.log('Hello Three')
}
helloThree()

// Function with arguments
function printName(name, lastName){
    console.log(name, lastName)
}
printName('Radek', 'Stolarczyk')

// Function with return
function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(5)
console.log(myResult)

// Import Function
import { printAge } from '../helpers/printHelper.js'
printAge(15)

// Import Everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(12)