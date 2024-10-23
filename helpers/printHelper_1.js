export function printAge(age){
    console.log(age)
}

class CustomerDetails {

    printFristName(firstName){
        console.log(firstName)
    }

    /**
     * This method will print name
     * @param {string} lastName 
     */
    printLasttName(lastName){
        console.log(lastName)
    }

}

export const customerDetails = new CustomerDetails()