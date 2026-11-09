//  Capa de servicios para manejar la lógica de negocio de las tareas

const httpError = require("../utils/HttpError");

// base de datos local

let tareas = [
    { id: 1, titulo: "Realizar avances del proyecto ", completada: false },
    { id: 2, titulo: "Hacer tareas de real", completada: true },
];



let siguienteId = 3;

function listarTareas() {
    return tareas;
}


function obtenerTareas(id) {
    const tarea = tareas.find((tarea) => tarea.id === id);
    if (!tarea) {
        throw new HttpError(404, "Tarea no encontrada");
    }
    return tarea;
}

function crearTarea(titulo) {
    const nuevaTarea = {
        id: siguienteId++,
        titulo,
        completada: false,
    };
    tareas.push(nuevaTarea);
    return nuevaTarea;
}

function actualizarTarea(id, titulo, completada) {
    const tarea = obtenerTareas(id);    
    Object.assign()(tarea,cambios);
    return tarea;
}

function eliminarTarea(id) {
    const tarea = obtenerTareas(id);
    tareas = tareas.filter((t) => t.id !== id);
}

module.exports = {
    listarTareas,
    obtenerTareas,
    crearTarea,
    actualizarTarea,
    eliminarTarea
};