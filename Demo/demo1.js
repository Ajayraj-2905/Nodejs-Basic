// modules

// commonJS, every file is module (by default)
// modules - Encapsulated code (only share minimun) 

const sayHi = require('./demo3')

// const { route1, route2 } = require('./demo2')
// console.log(route1)
// sayHi(route2)

const names = require('./demo2')
console.log(names)
sayHi(names.route1)

sayHi('Kishore')

// const name = 'John'

// const sayHi = (name) => {
//     console.log(`Hi ${name}`)
// }