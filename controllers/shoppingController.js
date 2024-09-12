const Product = require('../models/productModel') ;


exports.getAllProduct = (req,res) => {

}

exports.addProduct = (req,res) => {

    const items = Product.create(req.body) ;
}
