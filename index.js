const express = require('express')
const app = express()

app.set('port', 3000)

app.post('/', (req, res, next) => {
    res.status(200)
    res.end()
})

app.listen(app.get('port'), () => {
    console.log(`You are online using at ${app.get('port')}`)
})