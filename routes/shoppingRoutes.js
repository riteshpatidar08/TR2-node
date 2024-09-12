const express = require('express') ;


const router = express.Router() ;
const shoppingController = require('../controllers/shoppingController')

router.get('/allproducts',shoppingController.getAllProduct) ;

router.get('/allproducts/:id',shoppingController.getSingleProduct)

router.post('/addproduct',shoppingController.addProduct)

router.delete('/deleteproduct/:id',shoppingController.deleteProduct)

module.exports = router