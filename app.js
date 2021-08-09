
const {inquiererMenu} = require('./helpers/inquirer')

require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {
    
    let opt = ''
    do {

        opt = await inquiererMenu();
        console.log({opt})
        
        
        if ( opt !== '0')  await pausa();

    } while (opt !== '0');
     

    
}

main();