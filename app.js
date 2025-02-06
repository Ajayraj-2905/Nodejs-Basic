const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hello Everyone!')
})

server.listen(5000, () => {
    console.log('Server is running ...')
})