const router = require("express").Router();
const userController = require("../Controller/UserController");

router.post("/register", userController.register);
router.get("/login", userController.login);

module.exports = router;
