const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World HAHA!')
})

app.listen(3000)