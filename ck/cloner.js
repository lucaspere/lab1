import { execSync } from 'child_process';
import fs from 'fs';
import {parse} from 'csv-parse';
import path from 'path';
import { fileURLToPath } from 'url';

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
    execSync(`git clone ${url} ./repos`, { encoding: 'utf-8' })
}

async function getCk() { 
    execSync(`java -jar ck-0.7.1-SNAPSHOT-jar-with-dependencies.jar ./repos true 0 False`, { encoding: 'utf-8' })
    //metodo para retirar as infos
}

async function deleteRepoFolder() {
    fs.rmSync("./repos", { recursive: true, force: true });
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
        cbo.push(element.cbo);
    });
    let medianCBO = median(cbo);
    // console.log("CBO: " + medianCBO);
    return medianCBO;
}

function getLcom(array){
    let lcom = [];
    array.forEach(element => {
        lcom.push(element['lcom*']);
    });
    let medianLCOM = median(lcom);
    // console.log("LCOM: " + medianLCOM);
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
    const reposData = await getCSV(path.resolve(__dirname,'../dados.csv'));
    for(let i = 0;i<2;i++){
        await cloneRepo(reposData[i].url)
        await getCk();
        await getMetrics(reposData[i]);
    }
    console.log(reposData);
}

report()
