const mongoose = require('mongoose');

const { database } = require('../config');

mongoose.set('strictQuery', true);

const url = `mongodb+srv://${database.user}:${database.password}@cluster0.iz9gls4.mongodb.net/${database.dbname}?retryWrites=true&w=majority`;

const getConnection = async () => {
    const connection = await mongoose.connect(url);
    if(!connection) {
        console.log("Error al conectar a la base de datos");
    }
    console.log("Conexión exitosa!!");
    return connection;    
}

module.exports = { getConnection, }