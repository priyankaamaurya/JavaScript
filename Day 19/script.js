
//? call, apply, bind

// let customer1 = {
//     id : 1,
//     customerName : "Priyanka",
// }

// let customer2 = {
//     id : 2,
//     customerName : "Roshni",
// }

// let customer3 = {
//     id : 3,
//     customerName : "Radha",
// }

// function makeBill(amount, address) {
//     console.log(`My name is ${this.customerName} and total amount is ${amount} and address is ${address}`)
// }

// makeBill.call(customer1, 950000, "Gurgaon")
// makeBill.call(customer2, 900000, "Noida")

// makeBill.apply(customer1, [950000, "Gurgaon"])
// makeBill.apply(customer2, [9850000, "Noida"])

// let newFn = makeBill.bind(customer1, 950000, "Gurgaon")
// newFn()


