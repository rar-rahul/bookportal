const router            = require('express').Router();
const userController = require('../Controller/UserController')



router.post('/loginapp',userController.loginapp)






module.exports = router;
