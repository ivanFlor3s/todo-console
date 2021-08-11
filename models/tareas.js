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

    borrarTarea(id=''){
        if(this._listado[id]){

            delete this._listado[id]
        }
    }

    crearTarea(desc = ''){
        const TAREA = new Tarea(desc);
        this._listado[TAREA.id] = TAREA;
    }

    listarCompleto(tareas = this.listadoArr){
        console.log('\n')
        tareas.forEach((element, index) => {
            console.log( `${index + 1 }`.green + `. ${element.desc} :: ${ element.completadoEn == null ? 'Pendiente'.red : 'Completada'.yellow } `)
        });
    }

    listarCompletadas( complatedas=  true){
        const FILTRADAS = this.listadoArr.filter( x =>
             complatedas ? x.completadoEn != null : x.completadoEn == null
        )
        this.listarCompleto(FILTRADAS)
    }
}

module.exports = Tareas