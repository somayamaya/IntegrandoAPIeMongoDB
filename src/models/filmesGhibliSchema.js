const moongose = require('mongoose');
const Schema = moongose.Schema

const filmesSchema = new Schema ({
    _id:{
        type: mongoose.Schema.Types.ObjectId,//tipo do dado recebido
        auto: true, // autogerado
        required: true //  obrigatorio
    
    },
    id:{
        type: String,
        required: false
    },
    title:{
        type: String,
        required: true,
        

    },
    description:{
        type: String,
        required: true
    


    },
    director:{
        type: String,
        required: true
    },
    producer:{
        type: String,
        required: true
    },
    release_date:{
        type: String,
        required: true
    },
    rt_score:{
        type: String,
        required: true
    },
    people:[{
        type: String,
        required: true
    }],
    species:[{
        type: String,
        required: true
    }],
    locations:[{
        type: String,
        required: true
    }],
    vehicles:[{
        type: String,
        required: true
    }],
    url:[{
        type: String,
        required: true
    }],

},
{ collection: 'filmesGhibli' }
    
);

const filmesGhibliCollection = mongoose.model('filmesGhibli', filmesSchema)

module.exports = {filmesGhibliCollection} 