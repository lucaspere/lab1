import { execSync } from 'child_process';
import fs from 'fs';
import {parse} from 'csv-parse';

function getCSV(path) {
    var data = []
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
            console.log(error.message);
        })
        .on("end", function () {
            // console.log(data[1]);
        });
        return data;
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

function getMetrics(){
    let classMetrics = getCSV('class.csv');
    let methodMetrics = getCSV('class.csv');

}

// deleteRepoFolder();
// cloneRepo('https://github.com/marinisz/trabalhoAlgoritmos');
// getCk();
getMetrics()
