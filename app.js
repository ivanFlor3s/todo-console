
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {inquiererMenu, pausa, leerInput} = require('./helpers/inquirer')
const Tareas = require('./models/tareas')

require('colors');

//const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {

    const TAREAS = new Tareas()
    const TAREASDB = leerDB()

    if(TAREASDB){
        TAREAS.cargarTareas(TAREASDB)
    }
    
    let opt = ''
    do {

        opt = await inquiererMenu();
        switch (opt) {
            case '1':
                //crear opcion
                const DESC = await leerInput('Descripcion tarea: ')
                TAREAS.crearTarea(DESC)
                break;

            case '2':
                console.log(TAREAS.listadoArr)
                break;

            case '3':
                
                break;

            case '4':
                
                break;
            case '5':
                
                break;
        
            default:
                break;
        }

        //guardarDB( TAREAS.listadoArr)

        await pausa()
        
        console.log({opt})
       

    } while (opt !== '0');
     

    
}

main();