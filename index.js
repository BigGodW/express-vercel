const express = require('express')
const path = require('path')
const app = express()
const router = require('./router/index.js')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    res.render('./public/index.html')
})
app.use('/api',router)


app.listen(3009,()=>{
    console.log('running 3000')
})
module.exports = app