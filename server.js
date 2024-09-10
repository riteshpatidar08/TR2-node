const express = require('express') ;
const chalk = require('chalk') ;
const app = express() ;

// const userRoutes = require('./routes/userRoutes')


app.use(express.json())  ;


//NOTE middleware
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    console.log('middleware first run')
    next() ;
})

//NOTE middleware
app.use((req,res,next)=>{
    console.log('middleware second is run')
    next() ;
})

//NOTE middleware
app.use((req,res,next)=>{
    req.name = 'ritesh'
    next() 
})




// app.post('/register',userController.register) 
// app.get('/getUsers' , userController.getUsers)


//NOTE default api address
//NOTE seprate routes for user
app.use('/api',require('./routes/userRoutes')) ;
app.use('/api',require('./routes/productRoutes'))
// res.json({data : userData})

app.listen(3000,()=>{
    console.log(chalk.blue.bold('Server is running through express'))
});




//NOTE MIDDLEWARE  

//app.use()  series of functions which are execute during the lifecycle of the request -response cyle

//app.use() accpets a callback function which have access to the req object , response object , and next function




















// const http = require('http') ;
// let finalData = ''

// const server = http.createServer((req,res)=>{
//     let jsonData  = '';
//    if(req.method === 'POST'){

//     //NOTE STEP-1 When the req is made using the POST method we have to listen to the event "data" where our data is received in the chunks from the client(browsers or any api testing tool(like postman,thunder client)) and save it to a variable.

//     req.on('data',(data)=>{
//       jsonData += data.toString() ;
//       console.log(jsonData) ;
//     })

//     //NOTE STEP-2 when the all data is available event name "end" is fire on the req where we can handle the data we are receiving from the client save it to a variable or run any query using database.
//  req.on('end',()=>{
//     finalData = JSON.parse(jsonData);
//     console.log(finalData)
//     res.end(JSON.stringify(finalData))
//     // res.end('Data received successfully')
//  })
   
  
// }
// })

// server.listen(3000,()=>{
//     console.log('server is running')
// })