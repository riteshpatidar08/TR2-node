const express = require('express') ;
const userController = require('../controllers/userController');

//creating a sperate router for user file
const router = express.Router() ;

router.get('/getuser',userController.getUsers)


module.exports = router ;

