const express = require('express');
const router =express.Router();
const controller = require('../controllers/filmesGhibliController')

router.get('/filmes', controllers.getAllFilmes)





module.exports = router;