const router = require("express").Router();
const {
  indexView,
  categoryView,
  bookView,
  bookList,
} = require("../Controller/HomeController");
const categoryController = require("../Controller/CategoryController");
const bookController = require("../Controller/BookController");
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
router.get("/home", indexView);
router.get("/category", categoryView);
router.get("/books", bookView);
router.get("/booklist", bookController.bookList);

//All post request route here
router.post("/addCategory", categoryController.addCategory);
router.post("/addBook", upload.single("bookpdf"), bookController.addBook);
router.get("/getBook", bookController.getBooks);


module.exports = router;
