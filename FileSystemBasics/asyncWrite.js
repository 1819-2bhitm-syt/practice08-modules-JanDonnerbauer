let fs = require('fs');

let filename = "todo2.txt";
let filepath = "C:\\Users\\it170132\\Desktop\\";

let content = "- Java üben\n";
content += "- Node.js üben\n";
content += "- Gemüse einkaufen\n";

fs.writeFile(filepath + filename, content, (err) => {
    if(err != null){
        console.error(err.message);
    }else {
        console.log(`File ${filepath} has been saved!`);
    }
});