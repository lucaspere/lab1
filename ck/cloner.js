import { execSync } from 'child_process';
// import { execSync } from 'child_process';  // replace ^ if using ES modules

export const output = (url) => execSync(`git clone ${url}`, { encoding: 'utf-8' });  // the default is 'buffer'

output('https://github.com/lucaspere/lab1.git')