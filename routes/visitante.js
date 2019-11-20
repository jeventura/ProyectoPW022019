var express = require('express');
var router = express.Router();
const visitanteController = require("./../controllers/VisitanteController");

router.get("/", visitanteController.getVisitante);
router.post("/", visitanteController.insert);
router.get("/:id", visitanteController.getOneVisitante);
router.put('/', visitanteController.update);
router.delete('/', visitanteController.deleteById);

module.exports = router;