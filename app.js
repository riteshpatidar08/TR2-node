const express = require('express') ;
const app = express() ;
const PORT = 8000 ;





app.listen(PORT,()=>{
    console.log(`Server is running on the PORT ${PORT}`)
}) ;


//step to connect with mongodb 
//step1 we have to install the ODM Library called mongoose.
//step2 import the mongoose and call the connect method on it

// npm i mongoose