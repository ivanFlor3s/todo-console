const fs = require('fs')

const ARCHIVO = './db/data.json'

const guardarDB = (data) =>{
   

    fs.writeFileSync(ARCHIVO, JSON.stringify(data))
}

const leerDB = () => {
    if(!fs.existsSync(ARCHIVO)){
        return null
    } 
    const INFO = fs.readFileSync(ARCHIVO, { encoding: 'utf8'})
    const DATA = JSON.parse(INFO) 

    return DATA
}

module.exports = {
    guardarDB,
    leerDB
}