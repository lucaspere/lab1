import { execSync } from 'child_process';
import fs from 'fs';
import {parse} from 'csv-parse';
import path from 'path';
import { fileURLToPath } from 'url';
import { normalizeCsvData, setQuery, writeCSVFile } from '../../utils.js';

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

async function removeZeros(){
    var newData = await getCSV(path.resolve(__dirname,'../dados.csv'));
    var novos = []
    for(let i = 0;i<newData.length;i++){
        if(!await isNotEmpty(newData[i])){
            console.log("esse n é vazio: "+ newData[i].name);
            novos.push(newData[i])
            const nodes = novos
            .flat()
            .map(node => normalizeCsvData(node))
            await writeCSVFile(nodes)
        }
    }
}

async function isNotEmpty(data){
    if((parseFloat(data.cbo)+parseFloat(data.dit)+parseFloat(data.lcom))>0) {
        return false
    }
    return true
}


removeZeros()