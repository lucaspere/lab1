import { execSync, exec } from 'child_process';
import fs from 'fs';
import {parse} from 'csv-parse';
import path from 'path';
import { fileURLToPath } from 'url';
import { compose, Transform } from 'node:stream';
import { writeCSVFile } from '../utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Filter extends Transform {
    constructor (metricName, options = {}) {
        options.objectMode = true
        super(options)
        this.metricName = metricName
        this.values = []
    }
    _transform(chunk, encoding, cb) {
        if(chunk[this.metricName]) this.values.push(chunk[this.metricName])
        cb()
    }
    _flush(done) {
        done(null, {[this.metricName]: this.values})
    }
}

function getCSV(path) {
    const par = parse({
        delimiter: ",",
        columns: true,
        ltrim: true,
        })
    
    return fs.createReadStream(path).pipe(par)


}

function cloneRepo(url) {
    execSync(`git clone ${url}`, { encoding: 'utf-8' })
}
//cloneRepo('https://github.com/alibaba/Sentinel')
function getCk() { 
    execSync(`java -jar ck-0.7.1-SNAPSHOT-jar-with-dependencies.jar ../repos true 0 False`, { encoding: 'utf-8' })
    //metodo para retirar as infos
}
//getCk()
function deleteRepoFolder() {
    fs.rmSync("./repos", { recursive: true, force: true });
}

function getLoc(array){
    let loc = 0;
    array.forEach(element => {
        loc += parseInt(element.loc);
    });
    console.log(loc);
    return loc;
}

function getDit(array){
    let dit = 0;
    array.forEach(element => {
        if(element.dit>dit)
        dit = element.dit;
    });
    console.log(dit);
    return dit;
}

//to-do
//lcom*/cbo

function getMetrics(){
    const classMetrics  = getCSV(path.resolve(__dirname,'class.csv'));
    const obj = {name: "Sentinel"}
    classMetrics.pipe(new Filter("cbo")).on("data", c => {
        obj["cbo"] = c["cbo"].reduce((somatorio, valor) => somatorio + Number(valor), 0)
    })
    classMetrics.pipe(new Filter("dit")).on("data", c => {
        obj["dit"] = Math.max(...c["dit"].map(valor => Number(valor)))
    })
    classMetrics.pipe(new Filter("lcom*")).on("data", c => {
        const lcoms = c["lcom*"].map(valor => Number.parseFloat(valor)).sort()
        const lcomsTamanho = lcoms.length
        const medianaPar = (lcoms[lcomsTamanho / 2 - 1] + lcoms[lcomsTamanho / 2]) / 2
        const medianaImpar = lcoms[Math.floor(lcomsTamanho/2)]
        obj["lcom*"] = !lcomsTamanho % 2 ? medianaPar : medianaImpar
    })
    const methodMetrics = getCSV(path.resolve(__dirname,'method.csv'));
    methodMetrics.pipe(new Filter("loc")).on("data", c => {
        obj["loc"] = c["loc"].reduce((somatorio, valor) => somatorio + Number(valor), 0)
    })
    methodMetrics.on("close", () => {
        writeCSVFile([obj], "metricResults")
    })
}

// deleteRepoFolder();
// cloneRepo('https://github.com/marinisz/trabalhoAlgoritmos');
// getCk();
getMetrics()
