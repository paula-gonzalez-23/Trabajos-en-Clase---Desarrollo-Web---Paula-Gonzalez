// capa controladores: traductor HTTP lee req llama al servicio y genera una respuesta res

const servicio = require("../services/tareas.service");

function listarTareas(req, res) {
    res.status(200).json(servicio.listarTareas());
}

function obtenerTarea(req, res) {
    const id = Number(req.params.id);
    res.status(200).json(servicio.obtenerTareas(id));
}

function crearTarea(req, res) {
    const nuevaTarea = servicio.crearTarea(req.body.titulo);
    res.status(201).json(servicio.crearTarea(nuevaTarea));
}

function actualizarTarea(req, res) {
    const id = Number(req.params.id);
    res.status(200).json(servicio.actualizarTarea(id, req.body));
}

function eliminarTarea(req, res) {
    servicio.eliminarTarea(Number(req.params.id));
    res.status(204).send();
}

module.exports = {
    listarTareas,
    obtenerTarea,
    crearTarea,
    actualizarTarea,
    eliminarTarea
};

