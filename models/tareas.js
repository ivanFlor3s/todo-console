const Tarea = require("./tarea")
require("colors");

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

    listarCompleto(){
        console.log('\n')
        this.listadoArr.forEach((element, index) => {
            console.log( `${index + 1 }`.green + `. ${element.desc} :: ${ element.completadoEn == null ? 'Pendiente'.red : 'Completada'.yellow } `)
        });
    }
}

module.exports = Tareas