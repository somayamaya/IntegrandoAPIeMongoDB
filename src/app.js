const express =require('express');
const app = express();
const cors = require('cors');
const filmes = require('./routes/filmesGhibliRoute');
const database = require('./models/repository');

database.connect();

app.use(cors());
app.use(express.json());
app.use('/',filmes);

module.exports = app;

