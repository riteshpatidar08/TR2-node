
const userData = [{
    username : 'abc'
},{
    username : 'xyz'
}] ;

exports.register = (req,res)=>{
    console.log(req.body)
 res.send('data received')
}

exports.getUsers = (req,res)=>{
    console.log(req.name)
    res.json({
        length : userData.length,
        data : userData
    })
}


//NOTE when you use "exports" keyword it creates an object 

//NOTE to export single file in common js module system we have to use "module.exports"