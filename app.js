
const {inquiererMenu, pausa} = require('./helpers/inquirer')

require('colors');

//const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {
    
    let opt = ''
    do {

        opt = await inquiererMenu();
        await pausa()
        
        console.log({opt})
       

    } while (opt !== '0');
     

    
}

main();