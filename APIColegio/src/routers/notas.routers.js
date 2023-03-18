const {Router} =require("express")
const router = Router();
const notasCtrl = require("../controller/notas.controller");


router.get('/notas', notasCtrl.getNotas);

router.post('/notas', notasCtrl.postNotas);

router.put("/notas", notasCtrl.putNotas);

router.delete("/notas", notasCtrl.deleteNotas);



module.exports = router;
