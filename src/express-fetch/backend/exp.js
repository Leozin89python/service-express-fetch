const express = require('express')
const app     = express()
const port    = 3000

const dados   = require('./data') 
const data    = require('./exp.json')

app.get('/', (req,res,next) =>{
    return res.json({
        dados
    })
})

app.get('/cia',(req,res,next)=>{
    return res.send({
        dados
    })
    load()
})

app.get('/executivo',(req,res,next)=>{
    return res.send({
        data 
    })
    
})

app.listen(port ,()=>{
    console.log(`executando na porta:${port}`)
})
//http://localhost:3000

