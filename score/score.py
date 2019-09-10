import random
import json
import datetime
from json import dumps
from datetime import date


def main():

    score = random.randint(1,999)
    #print(score)
    #dateDaConsulta = str(datetime.datetime.now())
    dateDaConsulta =  str(date.today())
    
    print(json.dumps({'scoreCliente': score, 'dataRequisicao': dateDaConsulta}))
    #print(json.dumps(score))
	

#start process
if __name__ == '__main__':
    main()


