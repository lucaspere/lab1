import { execSync } from 'child_process';

//java -jar ck-0.7.1-SNAPSHOT-jar-with-dependencies.jar trabalhoAlgoritmos true 0 False

export const cloneRepo = (url) => execSync(`git clone ${url}`, { encoding: 'utf-8' });  // the default is 'buffer'

// cloneRepo('https://github.com/marinisz/trabalhoAlgoritmos')

export const getCk = (url) => execSync(`java -jar ck-0.7.1-SNAPSHOT-jar-with-dependencies.jar ${url} true 0 False`, { encoding: 'utf-8' });  // the default is 'buffer'

getCk("trabalhoAlgoritmos")