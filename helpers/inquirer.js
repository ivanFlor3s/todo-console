const inquirer = require('inquirer');

require('colors');

const menuOptions = [{
    type: 'list',
    name: 'Opcion',
    message: 'Que desea hacer?',
    choices: ['opt1', 'opt2', 'opt3']
}]

const inquiererMenu = async() =>{
    console.clear()

    console.log("==================================".green);
    console.log("===== Seleccione una opcion ======".rainbow);
    console.log("==================================\n".green);

    const opt =  await inquirer.prompt(menuOptions);

    return opt;

}

module.exports = {
    inquiererMenu
}