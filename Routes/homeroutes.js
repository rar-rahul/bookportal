const router            = require('express').Router();
const {indexView,categoryView} = require('../Controller/HomeController')
const categoryController = require('../Controller/CategoryController')

//All view routes
router.get('/home',indexView)
router.get('/category',categoryView)


//All post request route here
router.post('/addCategory',categoryController.addCategory)

module.exports = router;
