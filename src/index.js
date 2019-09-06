const express = require('express');
const bodyParser =  require('body-parser');
const http = require('http');
const app =  express();


app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended :  false}));

app.get("/", function(req, res) {
    res.send("a<b>Credit</b>a, gente que a<b>Credit</b>a em gente.");
});

require('./controllers/authController')(app);

app.listen(3000);