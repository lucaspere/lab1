import { execSync } from 'child_process';
// import { execSync } from 'child_process';  // replace ^ if using ES modules

const output = execSync('git clone https://github.com/mauricioaniche/ck.git', { encoding: 'utf-8' });  // the default is 'buffer'
