import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { writeCSVFile, getCSV } from '../utils.js';
import { Filter } from '../filter.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function cloneRepo(url) {
    execSync(`git clone ${url} ../repos`, { encoding: 'utf-8' })
}
//cloneRepo('https://github.com/elastic/elasticsearch')
function getCk() { 
    execSync(`java -jar ck-0.7.1-SNAPSHOT-jar-with-dependencies.jar ../repos true 0 False`, { encoding: 'utf-8' })
    //metodo para retirar as infos
}
//getCk()
function deleteRepoFolder() {
    fs.rmSync("../repos", { recursive: true, force: true });
}
//deleteRepoFolder();

const calMediana = (vetor) => {
    const tamanho = vetor.length
    const medianaPar = (vetor[tamanho / 2 - 1] + vetor[tamanho / 2]) / 2
    const medianaImpar = vetor[Math.floor(tamanho/2)]

    return !tamanho % 2 ? medianaPar : medianaImpar
}

function getMetrics(){
    const classMetrics  = getCSV(path.resolve(__dirname,'class.csv'));
    const metrics = {}

    classMetrics.pipe(new Filter("cbo")).on("data", c => {
        const cbos = c["cbo"].map(valor => Number(valor))
        metrics["cbo"] = calMediana(cbos)
    })
    classMetrics.pipe(new Filter("dit")).on("data", c => {
        metrics["dit"] = Math.max(...c["dit"].map(valor => Number(valor)))
    })
    classMetrics.pipe(new Filter("lcom*")).on("data", c => {
        const lcoms = c["lcom*"].map(valor => Number.parseFloat(valor)).sort()
        metrics["lcom*"] = calMediana(lcoms)
    })
    const methodMetrics = getCSV(path.resolve(__dirname,'method.csv'));
    methodMetrics.pipe(new Filter("loc")).on("data", c => {
        metrics["tamanho"] = c["loc"].reduce((somatorio, valor) => somatorio + Number(valor), 0)
    })

    return {metrics, methodMetrics}
}

// deleteRepoFolder();
// cloneRepo('https://github.com/marinisz/trabalhoAlgoritmos');
// getCk();
const {metrics, methodMetrics} = getMetrics()
const processMetrics = {
    nome: 'elasticsearch',
    populalidade: 61079,
    atividade: 96,
    maturidade: new Date('2010-02-08T13:20:56Z').getFullYear()
}
console.log({...metrics, ...processMetrics})
methodMetrics.on("close", () => {
    writeCSVFile([{...metrics, ...processMetrics}], "metricResults")
})
