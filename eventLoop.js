// event loop 

console.log('Start task')

// setTimeout(() => {
//     console.log('Task done')
// }, 0)

// setInterval(() => {
//     console.log('Hello everyone!')
// }, 2000)

console.log('New start task')

const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello Everyone!')
})

server.listen(5000, () => {
    console.log('Server listening on port :5000')
})