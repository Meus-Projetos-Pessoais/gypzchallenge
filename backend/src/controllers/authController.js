const  express = require('express');
const bcrypt =  require('bcryptjs');
const cliente =  require('../models/cliente');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const axios = require('axios');
const router = express.Router();
const moment = require('moment');

const agora = moment().format('L');
console.log(agora);

router.post('/cadastro', async(req, res) => {

    const { cpf } =  req.body;
    try{
        if (await cliente.findOne({cpf}))
        return res.status(400).send({err : "Cliente já cadastrado."})
        const number = Math.floor(Math.random() * 999 + 1);
        const user = await cliente.create({...req.body, score: {
            scoreCliente: number,
            dataRequisicao:agora,
        }});
        

        //preciso colocar aquyi o score
   

        user.password = undefined;

        return res.send({user
        });

        
    }
    catch(err) {
        return res.status(400).send({error : 'Falha no registro'});
    }

});

router.post('/authenticate', async (req, res) => {
        const { cpf, password } = req.body;

        const user = await cliente.findOne({cpf}).select('+password');
        if (! cliente)
            return res.status(400).send({error : "Cliente não encontrado"});
        if(! await bcrypt.compare(password, user.password))
            return res.status(400).send({error :  "CPF ou senha incorretos"});

    user.password = undefined;

    const token = jwt.sign({id : user.id}, authConfig.secret, {
        expiresIn:86400
    });

    res.send({user, token});
        
});





module.exports = app => app.use('/auth', router);