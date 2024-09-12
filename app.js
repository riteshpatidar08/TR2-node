const express = require('express') ;
const app = express() ;
const PORT = 8000 ;
//require the mongoose package
const mongoose = require('mongoose')
 
//calling connect method to built connection between express app and mongodb 
mongoose.connect('mongodb://localhost:27017/shopping').then(()=>{
    console.log('Connection Successfull'
    )
})

app.use(express.json())

//name , price , category

//middleware for shopping routes
app.use('/api', require('./routes/shoppingRoutes'))

app.listen(PORT,()=>{
    console.log(`Server is running on the PORT ${PORT}`)
}) ;


//step to connect with mongodb 
//step1 we have to install the ODM Library called mongoose.
//step2 import the mongoose and call the connect method on it

//NOTE npm i mongoose

