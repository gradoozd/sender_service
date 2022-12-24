const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('body-parser-xml')(bodyParser);

app.set('port', 3000)

app.use(bodyParser.urlencoded( { extended: true }))
app.use(bodyParser.xml({
    xmlParseOptions: {
      explicitArray: false
    },
}));

app.post('/decision', (req, res, next) => {
    console.log('Received a request!', req.body)
    res.status(200).json({theme: null, version: 1.0})
    // setTimeout({
    //     fetch()
    // })
})


app.listen(app.get('port'), () => {
    console.log(`You are online using at ${app.get('port')}`)
})
