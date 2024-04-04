//Write function to read, Write and append data to a text file stored in local drive.
//use fs library and use methods readfile, write file and append methods.
//fs module, which provides functions for reading from, writing to, and appending data to files

const fs = require('fs').promises;

//Function to Write to file
async function writeFile(filePath, data) {
    try {
        await fs.writeFile(filePath, data,'utf8');
        console.log('File written successfully');
    } catch (error) {
        console.error('Failed to write file:', error);
    }
}
//Function to read file
async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath,'utf8');
        console.log('File read successfully', data);
        return data
    } catch (error) {
        console.error('Failed to read file:', error);
    }
}

//Function to append data to a text file
async function appendFile(filePath, data) {
    try {
        await fs.appendFile(filePath, data,'utf8');
        console.log('Data appended successfully');
    } catch (error) {
        console.error('Failed to append file:', error);
    }
}
const filePath = "C:/GitRepository/JSPrograms/JavaScriptFunctions/testFile.txt"
const data = " write to the text file"
const appendData = " new line to append to text file"
writeFile(filePath,data).then(() => {
readFile(filePath).then(()=> {
appendFile(filePath,appendData)
})
})