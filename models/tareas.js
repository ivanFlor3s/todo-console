const Tarea = require("./tarea")

class Tareas {
    _listado = {}

    constructor(){
        this._listado = {}
    }

    crearTarea(desc = ''){
        const TAREA = new Tarea(desc);
        this._listado[TAREA.id] = TAREA;
    }
}

module.exports = Tareas