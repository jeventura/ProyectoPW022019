var express = require('express');
var router = express.Router();
const visitanteController = require("./../controllers/VisitanteController");
const viewVisitante = require("./../controllersAPI/ViewVisitante");

router.get("/", visitanteController.getVisitante);
router.post("/", visitanteController.insert);
router.get("/:id", visitanteController.getOneVisitante);
router.put('/', visitanteController.update);
router.delete('/', visitanteController.deleteById);

router.get("/", viewVisitante.getVisitante);
router.post("/", viewVisitante.insert);
router.get("/:id", viewVisitante.getOneVisitante);
router.put('/', viewVisitante.update);
router.delete('/', viewVisitante.deleteById);

module.exports = router;