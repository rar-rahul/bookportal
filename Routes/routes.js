const router = require("express").Router();
const userController = require("../Controller/UserController");
const blogController = require("../Controller/BlogController");


router.post("/register", userController.register);
router.get("/login", userController.login);

router.get("/getblogs", blogController.getBlogs);
router.get("/getblog/:id", blogController.getSingelBlog);





module.exports = router;
