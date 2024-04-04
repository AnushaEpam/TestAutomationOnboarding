
const data = require('./testData.json')

data.testData.forEach(user => {
    const username = user.username 
    console.log(username)
    const password = user.password
    console.log(password)
})

