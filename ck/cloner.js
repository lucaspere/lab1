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

function cloneRepo(url) {
    execSync(`git clone ${url} ./repos`, { encoding: 'utf-8' })
}

function getCk() { 
    execSync(`java -jar ck-0.7.1-SNAPSHOT-jar-with-dependencies.jar ./repos true 0 False`, { encoding: 'utf-8' })
    //metodo para retirar as infos
}

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

async function getMetrics(){
    const classMetrics  = await getCSV(path.resolve(__dirname,'class.csv'));
    console.log(classMetrics)
    const methodMetrics = await getCSV(path.resolve(__dirname,'method.csv'));
    console.log(methodMetrics)
}

// deleteRepoFolder();
// cloneRepo('https://github.com/marinisz/trabalhoAlgoritmos');
// getCk();
await getMetrics()
