import { execSync } from 'child_process';
import fs from 'fs';
import {parse} from 'csv-parse';
import path from 'path';
import { fileURLToPath } from 'url';
import { normalizeCsvData, setQuery, writeCSVFile } from '../utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getCSV(path) {
    return new Promise((resolve, reject) => {
        const data = []
        fs.createReadStream(path)
            .pipe(
                parse({
                delimiter: ",",
                columns: true,
                ltrim: true,
                })
            )
            .on("data", function (row) {
                // 👇 push the object row into the array
                data.push(row);
            })
            .on("error", function (error) {
                reject(error)
            })
            .on("end", function () {
                resolve(data)
            });
    })

}

async function cloneRepo(url) {
    await deleteRepoFolder();
    try{
        execSync(`git clone ${url} ./repos`, { encoding: 'utf-8' })
    }catch(ex){
        console.log("erro ao clonar "+url);
    }
}

async function getCk() { 
    try{
        execSync(`java -jar ck-0.7.1-SNAPSHOT-jar-with-dependencies.jar ./repos true 0 False`, { encoding: 'utf-8' })
    }catch(ex){
        console.log(ex);
    }
}

async function deleteRepoFolder() {
    try{
        fs.rmSync("./repos", { recursive: true, force: true });
    } catch(ex) {
        console.log("error deleting: "+ex);
    }
}

function median(values){
    if(values.length === 0) return 0;

    values.sort(function(a,b){
      return a-b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2){
        return values[half];
    }
    return parseFloat((values[half - 1] + values[half]) )/ 2.0;
}

function getLoc(array){
    let loc = 0;
    array.forEach(element => {
        loc += parseInt(element.loc);
    });
    // console.log("LOC: "+loc);
    return loc;
}

function getDit(array){
    let dit = 0;
    array.forEach(element => {
        if(element.dit>dit)
        dit = element.dit;
    });
    // console.log("DIT: "+dit);
    return dit;
}

function getCbo(array){
    let cbo = [];
    array.forEach(element => {
        cbo.push(parseFloat(element.cbo));
    });
    let medianCBO = median(cbo);
    // console.log("CBO: " + medianCBO);
    return medianCBO;
}

function getLcom(array){
    let lcom = [];
    array.forEach(element => {
        console.log(parseFloat(element['lcom*']));
        if(!isNaN(parseFloat(element['lcom*'])))
        lcom.push(parseFloat(element['lcom*']));
    });
    let medianLCOM = median(lcom);
    return medianLCOM;
}

async function getMetrics(array){
    const classMetrics  = await getCSV(path.resolve(__dirname,'class.csv'));
    const methodMetrics = await getCSV(path.resolve(__dirname,'method.csv'));
    let dit = getDit(classMetrics)
    let lcom = getLcom(classMetrics)
    let loc = getLoc(methodMetrics)
    let cbo = getCbo(methodMetrics)
    array['dit']=parseFloat(dit);
    array['lcom']=parseFloat(lcom);
    array['loc']=parseFloat(loc);
    array['cbo']=parseFloat(cbo);
}

async function report(){
    var reposData = await getCSV(path.resolve(__dirname,'../dados.csv'));
    var newData = await getCSV(path.resolve(__dirname,'./dados.csv'));
    for(let i = 0;i<reposData.length;i++){
        if(await isNotRead(reposData[i].name)){
            console.log("Lendo: "+ reposData[i].name);
            await cloneRepo(reposData[i].url)
            await getCk();
            await getMetrics(reposData[i]);
            newData.push(reposData[i])
            const nodes = newData
            .flat()
            .map(node => normalizeCsvData(node))
            await writeCSVFile(nodes)
        }
    }
}

async function isNotRead(repoName){
    const dados = await getCSV(path.resolve(__dirname,'./dados.csv'));
    if(dados.length>0){
        for(let i=0;i<dados.length;i++){
            if(dados[i].name==repoName){
                console.log(repoName+" is here");
                return false
            }
        }
    }
    console.log(repoName+" is not here");
    return true;
}

async function isNotEmpty(data){
    return ((data.cbo+data.dit+data.lcom)<1)
}


report()