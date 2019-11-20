var express = require('express');
var router = express.Router();
const userController = require("./../controllers/UserController");

router.get("/", userController.getUser);
router.post("/", userController.insert);
router.get("/:id", userController.getOneUser);
router.put('/', userController.update);
router.delete('/', userController.deleteById);

module.exports = router;