
require('colors');

const mostrarMenu = ()=> {
    console.clear();
    console.log('=================================='.green);
    console.log('===== Seleccione una opcion ======'.rainbow);
    console.log('==================================\n'.green);

    console.log(`${'1'.green}. Crear tareas`);
    console.log(`${'2'.green}. Listar tareas`);
    console.log(`${'3'.green}. Listar tareas completadas`);
    console.log(`${'4'.green}. Listar tareas pendientes`);
    console.log(`${'5'.green}. Completar tarea(s)`);
    console.log(`${'6'.green}. Borrar tarea`); 
    console.log(`${'0'.green}. Salir \n`);

    //Preparo interfaz
    //1 Creo interfaz
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    //2 Uso la interfaz
    readline.question('Seleccione una opcion: ', (opcion)=>{
        console.log(opcion);
        //Cierro el readloine para que no espere mas
        readline.close();

    })


}


//Funcion para pausar la consola
const pausa = ()=>{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    

    readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opcion)=>{
       
        readline.close();

    })
}

module.exports = {
    mostrarMenu,
    pausa
}