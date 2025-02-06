// streams - http example

const http = require('http')
const { readFileSync, createReadStream } = require('fs')

const server = http.createServer((req, res) => {
    // const text = readFileSync('./content/bigFile.txt', 'utf-8')
    // res.end(text)

    const fileStream = createReadStream('./content/bigFile.txt', 'utf-8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})

server.listen(5000)