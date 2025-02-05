// file system module
// synchronous approach

console.log('Start task')
const { readFileSync, writeFileSync } = require('fs')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync(
    './content/readme.txt',
    `Here is the result : ${first}, ${second}`,
    // { flag: 'a' }
)

console.log('Task done')
console.log('New start task')