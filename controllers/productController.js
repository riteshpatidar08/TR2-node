const product = require('../Product')

exports.getProduct = (req,res) =>{
    res.status(200).json({
        data : product
    })
}

exports.createProduct = (req,res) => {
    const newProduct = req.body ;
    newProduct.id = product.length + 1 ;
    product.push(newProduct)
    res.json({
        data : product
    })
}

exports.singleProduct = (req,res)=>{
   const id = parseInt(req.params.id);
   console.log(id) ;
   const filterProduct = product.filter((el)=> el.id === id) ;
   if(filterProduct){
    res.json({
        data : filterProduct
    })
   }
   
}


exports.deleteProduct = (req,res)=>{
   const id = parseInt(req.params.id);
   console.log(id) ;
   const filterProduct = product.filter((el)=> el.id !== id) ;
  
    res.json({
        data : filterProduct
    })
   
   
}

exports.updateProduct = (req,res)=>{
     const id = parseInt(req.params.id);
     const updatedProduct = req.body
     const singleProduct = product.find((el)=>{
      return  el.id === id
     })
     console.log(singleProduct)
     singleProduct.price = updatedProduct.price
     res.json({
        data : singleProduct
     })
}


//NOTE     nosql(mongodb)   and    sql 

        //    Database            Database 
        //    Collections         Tables
        //    Documents           Rows   
        
