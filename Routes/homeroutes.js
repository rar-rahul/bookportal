const router = require("express").Router();
const {
  indexView,
  categoryView,
  bookView,
  bookList,
 
} = require("../Controller/HomeController");
const categoryController = require("../Controller/CategoryController");
const bookController = require("../Controller/BookController");
const userController = require('../Controller/UserController')
const blogController = require('../Controller/BlogController');

const path = require("path");
const multer = require("multer");
//file upload middelware
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/assets/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });
//All view routes

//login and register route here

router.post("loginapp",userController.loginapp);


router.get("/home", indexView);
router.get("/category", categoryView);
router.get("/books", bookView);
router.get("/booklist", bookController.bookList);
router.get("/bloglist", blogController.viewBlog);

router.get("/addblog",blogController.addBlog)

//All post request route here
router.post("/addCategory", categoryController.addCategory);
router.post("/addBook", upload.single("bookpdf"), bookController.addBook);
router.get("/getBook", bookController.getBooks);
router.get("/deleteBook/:id",bookController.removeBook);

//All blog route here
router.post("/createblog",blogController.createBlog);



module.exports = router;
