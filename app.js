const express = require('express')
const app = express()
const router = require('./router/index.js')
app.use(express.static('public'))

app.use('/api',router)


app.listen(3000,()=>{
    console.log('running 3000')
})