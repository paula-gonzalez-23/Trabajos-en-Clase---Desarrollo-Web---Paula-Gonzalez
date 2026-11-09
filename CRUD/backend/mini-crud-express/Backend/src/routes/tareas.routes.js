// capa de rutas: metodo+url -> controlador

const { Router } = require("express");

const controlador = require("../controllers/tareas.controller");

const router = Router();

router.get('/', controlador.listarTareas);
router.get('/:id', controlador.obtenerTarea);
router.post('/', controlador.crearTarea);
router.patch('/:id', controlador.actualizarTarea);
router.delete('/:id', controlador.eliminarTarea);

module.exports = router;    