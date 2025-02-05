// http module

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome Ajayraj')
    } else if (req.url === '/about') {
        // res.end('Here is our short history')
        res.end(`
            <h1>Hello</h1>
        `)
    }
    res.end(`   
        <h1>Oops!</h1>
        <p>We can't find this page</p>
        <a href='/'>back to home</a>
    `)

    // console.log(req)
    // res.write('Welcome Ajayraj')
    // res.end()
})

server.listen(5000)