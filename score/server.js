
const express = require('express');
const bodyParser =  require('body-parser');
const http = require('http');
const app =  express();


//https://www.tutorialspoint.com/run-python-script-from-node-js-using-child-process-spawn-method
app.get('/score', (req,res) =>{
    
    const path = require('path');
    const {spawn} = require('child_process');

function runScript(){
   return spawn('python', ['../score/score.py']);
}

const subprocess = runScript()
// print output of script
subprocess.stdout.on('data', (data) => {
   res.send(`${data}`);

});


});


app.listen(5000);