///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce((acc, cur) => (acc + cur.price), 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = ((cartTotal, couponValue, tax) => {
    withTax = cartTotal * (tax + 1)
    withDiscount = withTax - couponValue
    return withDiscount
})
console.log(calcFinalPrice(100,10,0.05))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
Name: A "string" data type To identify the customer for internal and external purposes (like contacting payment processors to complete transactions)

Phone: A "number" data type to store the contact info for the customer, so that staff can communicate to the customer as appropriate to achieve business outcomes.

Email: A "string" data type to store the customers' email address for sending periodic newsletters and promotions as part of an ongoing effort for encouraging repeat customers and running promotions of new products and events.

paymentCardNumber: A "number" data type to store the card number of the payment method the customer uses to initiate transactions, so that payment status can be tracked, and eventually collected

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
class Customer {
    constructor(name, phone, email, paymentCardNumber) {
    this.name = name,
    this.phone = Number(phone),
    this.email = email,
    this.paymentCardNumber = Number(paymentCardNumber)
    }
}

let bob = new Customer("Bob", "123444555", "example@email.com", 1111222233334444)
console.log(bob)