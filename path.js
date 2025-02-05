// path module
const path = require('path')
// console.log(path)

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
    
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'test.txt')
const absolute2 = path.resolve(__dirname,'content', 'subfolder', 'test.txt')
console.log(absolute)
console.log(absolute2)