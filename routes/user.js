var express = require('express');
var router = express.Router();
const userController = require("./../controllers/UserController");
const userView = require("./../renders/ViewUser")


router.get("/", userController.getUser);
router.post("/", userController.insert);
router.get("/:id", userController.getOneUser);
router.put('/', userController.update);
router.delete('/', userController.deleteById);

router.get("/", userView.getUser);
router.post("/", userView.insert);
router.get("/:id", userView.getOneUser);
router.put('/', userView.update);
router.delete('/', userView.deleteById);



module.exports = router;