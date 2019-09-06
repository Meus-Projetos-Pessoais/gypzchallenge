const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tech:tech@cluster0-0ngrx.mongodb.net/acredita?retryWrites=true&w=majority',  {useNewUrlParser: true});

mongoose.Promise = global.Promise;


module.exports = mongoose;

