const mongoose = require('mongoose');

const DB_URL = "mongodb://localhost:27017/reprograma";

const connect =()=> {
    mongoose.connect(DB_URL, {useNewUrlParser: true});
    const connection = mongoose.connection;
    connection.on("erro",()=> console.error(" Erro ao conectar MOngoDB"));
    connection.once("open",()=> console.log("Estamos conectadas!"));
}

module.exports = {connect}