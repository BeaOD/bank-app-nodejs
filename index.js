//import express
const express = require('express')
const bodyParser = require('body-parser')
const  {
    listBankController,
    createBankController,
    updateBankController,
    deleteaBankController
} = require('./controllers')

//create express server instance
const server = express()

//middlewares
server.use(bodyParser.json())


// request handlers/ controllers
//- view banks - get method
server.get('/bank', listBankController)
//- create banks - post method
server.post('/bank', createBankController)
//- update banks - put method
server.put('/bank', updateBankController)
//- delete banks -delete method
server.delete('/bank',deleteaBankController)


//start server
server.listen (3000, ()=> console.log ('bank server is ready '))
