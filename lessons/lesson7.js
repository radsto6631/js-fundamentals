//Loops

console.log('Hello World')
console.log('Hello World')
console.log('Hello World')
console.log('Hello World')
console.log('Hello World')

//statement1 = initial statement, what we want to start the loop with
//statement2 = how long we want to run the loop, when to stop
//statement3 = what do we need to do with each cycle of the loop 
// for(statement1; statement2; statement3){

// }

//we want to print (loop) Hello World! five times

//for loop (for i loop)
for(var i=0; i < 5; i++){
    console.log('Hello World!' + i)
}


//car is a variable that will be our iterator and that variable will hold the value of the array during the each itteration of the cycle

//for of loop
var cars = ['Volvo', 'Toyota', 'Test']
for(var car of cars){
    console.log(car)
}

//break the for of loop if Toyota is found
for(var car of cars){
    console.log(car)
    if(car == 'Toyota'){
        break
    }
}

//ES6 syntax for each loop
cars.forEach (car => {
    console.log(car)
})