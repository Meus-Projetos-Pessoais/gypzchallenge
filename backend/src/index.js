const express = require('express');
const bodyParser =  require('body-parser');
const http = require('http');
const bcrypt =  require('bcryptjs');
const cliente =  require('./models/cliente');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const app =  express();


const uint8arrayToString = function(data){
    return String.fromCharCode.apply(null, data);
};

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended :  false}));

app.get("/", function(req, res) {
    res.send("a<b>Credit</b>a, gente que a<b>Credit</b>a em gente.");


});


app.get('/show', (req, res) => {
  cliente.find({}, function(err, users) {
    const userMap = {};

    users.forEach(function(user) {
      userMap[user._id] = user;
    });

    res.send(userMap);  
 
    });
});

app.route('/delete/:id')
.get((req,res) => {
  
  var id = req.params.id;  
  cliente.findByIdAndRemove(id).exec();



  res.redirect('/show');
   
});

require('./controllers/authController')(app);

//app.listen(port);


app.listen(3000);

app.set('port', process.env.PORT || 3000);