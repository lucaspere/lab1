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

def getImportantData(pr):
    if(len(pr["requested_reviewers"])>0):
        print(len(pr["requested_reviewers"]))

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
                        else:
                            havePages=False
                else:
                    return
            except:
                print("Erro ao Procurar")
                return
        print(type(prs))
        for pr in prs:
            for data in pr:
                getImportantData(data)
        return prs

def getAll():
    prs = getRepoWithPrsHigherThan100()
    for pr in prs:
        getPrsFromRepo(pr)

getAll()