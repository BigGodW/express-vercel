const express = require('express')
const path = require('path')
const app = express()
const router = require('./router/index.js')
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api',router)


app.listen(3000,()=>{
    console.log('running 3000')
})
module.exports = app