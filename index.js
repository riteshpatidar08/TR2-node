
// // ^ => 1.X.X  => X 2.0.0
// //~ => 1.2.X => X 1.3.0

const fs =  require('fs/promises') ;
const os = require('os')
const path = require('path')
const http = require('http')
const EventEmitter = require('events')
// //NOTE readFileSync

// //NOTE BLOCKING CODE 
// // console.log('..syncronouse file read started')
// // const data = fs.readFileSync('./text.txt' , 'utf-8')

// // console.log(data)
// // console.log('..syncronouse file read ended')

// //NOTE readFile

// //NOTE NON-BLOCKING CODE 
// console.log('..asyncronouse file read started')

//__dirname variable gives current directory absolute path .

// console.log('dr',__dirname)
// const filePath = path.join(__dirname , index.txt)
// fs.readFile(filePath,'utf-8', (err,data)=>{
// console.log(data)
// })


// console.log('..asyncronouse file read ended')

// //NOTE writeFileSync
// const writeData = 'this data is written using writeFileSync'

// //synchrnous version
// fs.writeFileSync('./example.txt', writeData)

// //asynchrnous version
// //NOTE writeFile
// fs.writeFile('./index.txt','text data',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('data written successfully')
//     }
// })

// //appendFile , appendFileSync
// fs.appendFile('./text.txt',' added by using appendfile function ',(err)=>{
//    console.log('data added successfull') 
// })

// //used to delete any file
// fs.unlink('./example.txt', (err)=>{
// if(err) {
//     console.log(err)
// } else {
//     console.log('file deleted')
// }
// })

//used to rename specific file
// fs.renameSync('text.txt','example.txt')

//Operating System module 

// console.log(os.hostname())
// console.log(os.platform())
// console.log(ototalmem())
// console.log(os.freemem())


// console.log(data)


// nodemon index.js
// console.log(path.dirname('C:/Users/Desktop/batchfirstNode')) ;

// console.log(path.extname('C:/Users/Desktop/batchfirstNode/index.js')) ;

// console.log(path.basename('C:/Users/Desktop/batchfirstNode/index.js')) ;

// console.log(path.parse('C:/Users/Desktop/batchfirstNode/index.js')) ;

// console.log(path.join('Users','local' , 'bin' , 'index.js')) ;
  
// console.log(path.resolve('Users','local' , 'bin' , 'index.js')) ; 

// console.log(__dirname , __filename)

//NOTE HTTP 

 const server = http.createServer((req,res)=>{
   //first find the path 
   const filePath = path.join(__dirname ,'index.html')
   //read the data and send it to response
  fs.readFile(filePath , (err,data)=>{
   if(err){
      res.end('error')
   }else{
    res.writeHead(200,{'Content-Type' : 'text/html'})
      res.end(data)
   }
  })

   //  if(req.url === '/about'){
   //      res.end("about page")
   //  }


 
 })

 server.listen(3000 , ()=>{
    console.log("server is running")
 })

 
 server.on('request',()=>{
   console.log('request is made')
 })
 server.on("connection",()=>{
   console.log('new connection is made')
 })

//  setTimeout(()=>{
//    server.close()
//  },10000)

 //used to listen the specific events attached to the server.

 server.on('close',()=>{
   console.log('server is closed')
 })


//  http have two object called req ,res
// request => body

//localhost => 127.0.0.1


//NOTE EVENTS MODULE (OBSERVER PATTERN IN NODEJS) ;

const event = new EventEmitter() ;

//NOTE this is the listerner we have attached to the 'start' event whenever the start event emitted the attached callback on "on" method will trigger. 
event.on('start',()=>{
   console.log('event is emitted')
})

//EMIT method is used to fire the event in the node js application
event.emit('start')




//NOTE JSON.parse() used to convert the JSON data into js object
//NOTE JSON.stringify() used to convert the js object to JSON


