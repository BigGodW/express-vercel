const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('api---')
})
router.get('/query',(req,res)=>{
    res.send({
        query:req.query
    })
})
router.get('/params/:id',(req,res)=>{
    res.send({
        params:req.params,
        query:req.query
    })
    
})

module.exports = router