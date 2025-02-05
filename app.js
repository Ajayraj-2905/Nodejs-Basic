// asyncPattern - setup promise

const { readFile, writeFile } = require('fs')

// async pattern

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// promise pattern

// getText('./content/seven.txt')
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// node's native option

const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// async/await pattern

const start = async () => {
    try {
        // const first = await getText('./content/fourth.txt')
        // const second = await getText('./content/fifth.txt')
        const first = await readFilePromise('./content/fourth.txt', 'utf-8')
        const second = await readFilePromise('./content/fifth.txt', 'utf-8')
        await writeFilePromise(
            './content/result.txt',
            `This is awesome : ${first}, ${second}`
        )
        console.log(first)
        console.log(second)
    } catch (err) {
        console.log(err)
    }
}

start()