let fs = require('fs');
const filename = "todo.txt";

console.log(`Entire content of ${filename} will be read synchronously.`);

let content = fs.readFileSync(filename, {encoding: "utf8"});

console.log(`Reading ${filename} finished successfully.
Meanwhile Node.js couldn't do anything else.`);

console.log(`
Content of ${filename}:
${content}`);