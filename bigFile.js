const { writeFileSync } = require('fs')

for (let i = 1; i <= 500; i++) {
    writeFileSync(
        './content/bigFile.txt',
        `${i} It is my big file\n`,
        { flag: 'a' }
    )
}