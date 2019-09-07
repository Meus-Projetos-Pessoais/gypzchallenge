from flask import Flask, request,render_template
from flask import jsonify
import random
import json
import datetime
from json import dumps

app = Flask(__name__)

@app.route('/')
def index():
    random_number = {"score": random.randint(1,999), "dataConsulta" :  str(datetime.datetime.now())}
    #return render_template('index.html', random_number=random_number)
    return jsonify(random_number) 

if __name__ == '__main__':
  app.run()