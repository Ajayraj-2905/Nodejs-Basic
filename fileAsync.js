// file system module
// asynchronous approach

const { readFile, writeFile } = require('fs')

console.log('Start task')
// readFile('./content/third.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     // console.log(result)
//     const fourth = result + 'fourth result'
//     readFile('./content/fourth.txt', 'utf-8', (err, result) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const fifth = result + 'fifth result'
//         writeFile(
//             './content/fifth.txt',
//             `Here is a result : ${fourth}, ${fifth}`,
//             (err, result) => {
//                 if (err) {
//                     console.log(err)
//                     return
//                 }
//                 // console.log(result)
//                 console.log('Task done')
//             }
//         )
//     })
// })

readFile('./content/fourth.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('Task done')
})

console.log('New task start')