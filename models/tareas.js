const Tarea = require("./tarea")

class Tareas {
    _listado = {}

    get listadoArr(){
        const LISTADO = [];

        Object.keys(this._listado).forEach( key => {
            LISTADO.push( this._listado[key])
        })

        return LISTADO;
        
    }
    constructor(){
        this._listado = {}
    }

    cargarTareas(tareas = []){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea
        })
        
        
    }

    crearTarea(desc = ''){
        const TAREA = new Tarea(desc);
        this._listado[TAREA.id] = TAREA;
    }
}

module.exports = Tareas