const express = require('express');
const bodyParser =  require('body-parser');
const http = require('http');
const app =  express();

const myPythonScript = "../../score/score.py";
// Provide the path of the python executable, if python is available as environment variable then you can use only "python"
const pythonExecutable = "python.exe";

const uint8arrayToString = function(data){
    return String.fromCharCode.apply(null, data);
};

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended :  false}));

app.get("/", function(req, res) {
    res.send("a<b>Credit</b>a, gente que a<b>Credit</b>a em gente.");
});


//https://www.tutorialspoint.com/run-python-script-from-node-js-using-child-process-spawn-method
app.get('/score', (req,res) =>{
    
    const path = require('path')
    const {spawn} = require('child_process')
/**
   * Run python myscript, pass in `-u` to not buffer console output
   * @return {ChildProcess}
*/
function runScript(){
   return spawn('python', ['../score/score.py']);
}

const subprocess = runScript()
// print output of script
subprocess.stdout.on('data', (data) => {
   res.send(`${data}`);
});

});

app.post('/show', (req, res)=>{
    

    const id = req.params.id;
    const ObjectId = require('mongoose').ObjectID;

});


require('./controllers/authController')(app);



app.listen(3000);