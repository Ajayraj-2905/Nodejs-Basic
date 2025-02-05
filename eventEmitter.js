// eventEmitter

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on - listen for an event
customEmitter.on('response', (name, id) => {
    console.log(`data recieved user : ${name} and  id : ${id}`)
})

// emit - emit an event
customEmitter.on('response', () => {
    console.log(`some other logic here!`)
})

customEmitter.emit('response', 'kishore', 22)

// eventEmitter - http module 

const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Welcome!')
})

server.listen(5000, () => {
    console.log('Server is running')
})