import { execSync } from 'child_process';
import fs from 'fs';
import {parse} from 'csv-parse';

function buscaCSV(caminho) {
    var data = []
    fs.createReadStream(caminho)
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
            // console.log(data.length);
        });
        return data;
    }

export const cloneRepo = (url) => execSync(`git clone ${url} ./repos`, { encoding: 'utf-8' });  // the default is 'buffer'

export const getCk = () => execSync(`java -jar ck-0.7.1-SNAPSHOT-jar-with-dependencies.jar ./repos true 0 False`, { encoding: 'utf-8' });  // the default is 'buffer'

export const deleteRepoFolder = () => fs.rmSync("./repos", { recursive: true, force: true });

// deleteRepoFolder();
// cloneRepo('https://github.com/GrowingGit/GitHub-Chinese-Top-Charts');
// getCk();
// buscaCSV()