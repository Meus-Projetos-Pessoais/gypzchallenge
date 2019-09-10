const mongoose = require('../database/index');
const bcrypt = require('bcryptjs');


const ClienteSchema = new mongoose.Schema({

    cpf:{
        type: String,
        require: true,

    },
    nome:{
        type: String,
        require: true,
    },
    salario:
    {
            type: Number,
            require: true,
    },
    valorCredito:{
        type: Number,
        require: true
    }
    ,
    cep:{
        type: String,
        require: true,
    },
    rua:{
        type: String,
        require: true,
    }, 
    numero :{
        type: String,
        require: true,
    }, 
    bairro:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        lowercase: true,
    },

    password:{
        type: String,
        require: true,
        select:false,
    },

    criadoEm:{
        type:Date,
        default:Date.now,
    },
    score:[
               
    ],

    
},


);

ClienteSchema.pre('save', async function(next){const hash = await bcrypt.hash(this.password,10); this.password =  hash; next();});

const Cliente =  mongoose.model('Cliente', ClienteSchema);

module.exports= Cliente;