const express = require('express');
const productController = require('../controllers/productController')
const  router = express.Router() ;

router.get('/getproducts', productController.getProduct) ;

router.post('/createproduct', productController.createProduct  )

module.exports = router