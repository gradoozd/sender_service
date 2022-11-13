const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('body-parser-xml')(bodyParser);

app.set('port', 3000)

app.use(bodyParser.urlencoded( { extended: true }))
app.use(bodyParser.xml({
    xmlParseOptions: {
      explicitArray: false // Only put nodes in array if >1
    },
}));

app.post('/', (req, res, next) => {
    console.log('Received a request!', req.body)
    res.status(200)
    res.end()
})

app.listen(app.get('port'), () => {
    console.log(`You are online using at ${app.get('port')}`)
})