

const {v4 : uuidv4} = require('uuid')

class Tarea {
    id = uuidv4();
    desc = '';
    completadoEn = null;

    constructor(desc){
        this.desc = desc
    }
}

module.exports = Tarea