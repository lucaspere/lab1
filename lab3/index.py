import json
import requests
from dotenv import dotenv_values
import requests
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
            print(url)
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
        print(len(prs))
        return prs

getPrsFromRepo(getRepoWithPrsHigherThan100()[0])