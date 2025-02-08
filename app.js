// http - navbar example

const { readFileSync } = require('fs')
const http = require('http')

const navbarHtml = readFileSync('./Navbar/index.html')
const navbarCss = readFileSync('./Navbar/style.css')
const navbarJs = readFileSync('./Navbar/index.js')
const navbarImage = readFileSync('./images/marvel.png')

const server = http.createServer((req, res) => {
    const url = req.url
    // home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        // res.write('<h1>Home page</h1>')
        res.write(navbarHtml)
        res.end()
    }
    // about page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About page</h1>')
        res.end()
    }
    else if (url === '/style.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(navbarCss)
        res.end()
    }
    else if (url === '/index.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(navbarJs)
        res.end()
    }
    else if (url === '/images/marvel.png') {
        res.writeHead(200, { 'content-type': 'image/png' })
        res.write(navbarImage)
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