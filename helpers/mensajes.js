const { resolve } = require("path");

require("colors");




const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();

    console.log("==================================".green);
    console.log("===== Seleccione una opcion ======".rainbow);
    console.log("==================================\n".green);

    console.log(`${"1".green}. Crear tareas`);
    console.log(`${"2".green}. Listar tareas`);
    console.log(`${"3".green}. Listar tareas completadas`);
    console.log(`${"4".green}. Listar tareas pendientes`);
    console.log(`${"5".green}. Completar tarea(s)`);
    console.log(`${"6".green}. Borrar tarea`);
    console.log(`${"0".green}. Salir \n`);

    const READLINE = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });

    //2 Uso la interfaz
    READLINE.question("Seleccione una opcion: ", (opcion) => {
      //Cierro el readloine para que no espere mas
      resolve(opcion);
      READLINE.close();
    });
  });
};

//Funcion para pausar la consola
const pausa = () => {
  return new Promise( resolve => {

    const READLINE = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      READLINE.question(
      `\nPresione ${"ENTER".yellow} para continuar\n`,
      (opcion) => {
          READLINE.close();
          resolve()
      }
    );
  })

};

module.exports = {
  mostrarMenu,
  pausa,
};
