import json
import requests
from dotenv import dotenv_values
import csv
import requests
import pandas as pd
from pathlib import Path
from dotenv import dotenv_values
env_path = Path(__file__).parent / ".\\.env"
config = dotenv_values(str(env_path))
GITHUB_TOKEN = config["GITHUB_TOKEN"]

def openJson():  
    f = open('data.json')
    data = json.load(f)
    f.close()
    return data

def getRepoWithPrsHigherThan100():
    data = openJson()
    morePrs = []
    for file in data:
        if(int(file['pullRequests'])>100):
            morePrs.append(file)
    return morePrs

def getImportantData(pr,repo):
    if(len(pr["requested_reviewers"])>0):
        checkRepo(repo)

def writeToFile(repo):
    df = pd.json_normalize(repo)
    df.to_csv('dados.csv',encoding='utf-8', index=False)
    

def checkRepo(repo):
    jsonArray = []
    with open('dados.csv', encoding='utf-8') as csvf: 
        csvReader = csv.DictReader(csvf)
        for row in csvReader: 
            jsonArray.append(row)
    isPresent = False
    for json in jsonArray:
        if(repo["name"]==json["name"]):
            isPresent = True
    if(not isPresent):
        jsonArray.append(repo)
        writeToFile(jsonArray)
    

def getPrsFromRepo(repo):
    split = repo['url'].split("/")
    owner = split[3]
    name = split[4]
    page = 1
    prs = []
    havePages = True
    headers = {"Authorization": ("Bearer " + GITHUB_TOKEN)}
    while havePages:
        url = "https://api.github.com/repos/%s/%s/pulls?state=all&page=%s"%(owner, name, page)
        try:
            request = requests.get(url,headers = headers)
            if request.status_code == 200:
                    responses = (request.json())
                    if(len(responses)>0):
                        prs.append(responses)
                        page+=1
                        havePages=False
                    else:
                        havePages=False
            else:
                return
        except:
            print("Erro ao Procurar")
            return
    for pr in prs:
        for data in pr:
            getImportantData(data, repo)
    return prs

def getAll():
    prs = getRepoWithPrsHigherThan100()
    for pr in prs:
        getPrsFromRepo(pr)

# checkRepo(getRepoWithPrsHigherThan100()[8])
getAll()