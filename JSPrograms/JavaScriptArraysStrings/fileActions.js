
const fs = require('fs').promises;

function readFile(filePath) {
    return fs.readFile(filePath, 'utf8')
        .then(data => {
            console.log('File read successfully:', data);
            return data; 
        })
        .catch(error => {
            console.error('Failed to read file:', error);
            throw error; 
        })
        .finally(() => {
            console.log('Read file operation attempted');
        });
}

const filePath = 'C:/GitRepository/JSPrograms/JavaScriptArraysStrings/newFile.txt';
readFile(filePath)
    .then(data => {
    console.log("Promise resolved")
    })
    .catch(error => {
       console.log("Promise rejected")
    });
