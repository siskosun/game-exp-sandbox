import { readFile } from 'node:fs/promises';
const html=await readFile('index.html','utf8');
for(const token of ['id="arena"','id="dot"','id="start"','function begin()']){
  if(!html.includes(token)) throw new Error('missing '+token);
}
console.log('prototype smoke test passed');
