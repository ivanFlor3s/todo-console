const inquirer = require("inquirer");

require("colors");

const pausaMenu = [
    {
        type: 'input',
        message: `Ingrese ${'ENTER'.green} para continuar`,
        name: 'temp'
    }
]

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que desea hacer?",
    choices: [
      {
        value: "1",
        name: `${'1'.green}. Crear tarea`,
      },
      {
        value: "2",
        name: `${'2'.green}. Listar tareas`,
      },
      {
        value: "3",
        name: `${'3'.green}. Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${'4'.green}. Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${'5'.green}. Completar tarea/s`,
      },
      {
        value: "6",
        name: `${'6'.green}. Borrar tarea`,
      },
      {
        value: "0",
        name: `${'0'.green}. Salir`,
      },
    ],
  },
];

const leerInput = async(message) =>{
    const question = {
        type: 'input',
        name: 'desc',
        message,
        validate( value ){
            if(value.length === 0) {
                return 'Por favor ingrese un valor'
            } 
            return true
        }
    }

    const {desc} = await inquirer.prompt(question)
    return desc
}

const pausa = async () => {
    console.log('\n')
    const {temp} = await inquirer.prompt(pausaMenu)
    return temp;
}

const inquiererMenu = async () => {
  console.clear();

  console.log("==================================".green);
  console.log("===== Seleccione una opcion ======".rainbow);
  console.log("==================================\n".green);

  const {opcion} = await inquirer.prompt(preguntas);

  return opcion;
};

const listadoTareasBorrar = async(tareas=[]) =>{
  const choices =  tareas.map( (element, i) => {
    const idx = `${i + 1}`.green
    return {
      value: element.id,
      name: `${idx}. ${element.desc}`
    }
  })

  const pregunta = [ {
    type: 'list',
    name: 'id',
    message: 'Borrar tarea',
    choices

  }]
  const {id} = await inquirer.prompt(pregunta)
  return id

}

module.exports = {
  inquiererMenu, pausa, leerInput, listadoTareasBorrar
};
