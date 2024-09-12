const Product = require('../models/productModel') ;


exports.getAllProduct = async(req,res) => {

try {
    const products = await Product.find() 
    if(products){
        res.status(200).json({
            length : products.length,
            data : products
        })
    }
} catch (error) {
    res.send(400).send(error)
}
}

exports.addProduct =async (req,res) => {
try {
       const items =  await Product.create(req.body) ;
       
       res.status(201).json({
        message : "Product created Successfully",
       data : items
       })
} catch (error) {
    res.status(400).send(error)
}
 
}


exports.getSingleProduct = async(req,res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json({
            data : product
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.deleteProduct = async(req,res)=>{
    try {
         const product = Product.findByIdAndDelete(req.params.id)
         res.status(200).json({

            data : product
         })
    } catch (error) {
        
    }


}


