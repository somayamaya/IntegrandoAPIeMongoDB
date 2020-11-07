const filmesG = require('../models/filmesGhibliSchema');

const getAllFilmes = (req,res)=>{
    console.log(req.url)

    filmesG.filmesGhibliCollection.find((error,filmesGhibli)=>{
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send(filmesGhibli)
        }
    })

}

module.exports ={
    getAllFilmes
}