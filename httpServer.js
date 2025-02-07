// http - header, request object, html file

const http = require('http')
const { readFileSync } = require('fs')

// get index.html file
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    // console.log('User hits the server')
    // res.end('Hello Everyone!')

    // console.log(req)
    // console.log(req.method)
    // console.log(req.url)

    // res.writeHead(200, { 'content-type': 'text/html' })
    // res.write('<h1>Hello Everyone!</h1>')
    // res.end()

    const url = req.url
    // home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        // res.write('<h1>Home page</h1>')
        res.write(homePage)
        res.end()
    }
    // about page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About page</h1>')
        res.end()
    }
    // 404
    else {
        res.writeHead(400, { 'content-type': 'text/html' })
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})

server.listen(5000, () => {
    console.log('Server is running ...')
})