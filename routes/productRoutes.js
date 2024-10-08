const express = require('express');
const productController = require('../controllers/productController') 

const router = express.Router() ;

//NOTE retrieving all products
router.get('/getproducts', productController.getProduct) ;

//NOTE adding new product
router.post('/createproduct', productController.createProduct) ;

//NOTE fetching single product
router.get('/singleproduct/:id',productController.singleProduct)

//NOTE delete a single product 
router.delete('/deleteproduct/:id',productController.deleteProduct) ;

router.put('/updateproduct/:id' , productController.updateProduct) 

module.exports = router ;