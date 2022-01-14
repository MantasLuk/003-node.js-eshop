//funkcija kuri moka perskaityti viena faila konkretu

const fs = require('fs/promises');
const path = require('path');

async function readFile(fileName) {

    try{
        const fullPath = path.join(__dirname, '../data/' + fileName + '.json');
        const content = await fs.readFile(fullPath, 'utf-8');
        return content;
        } catch(error) {
            return false;
        }
}


module.exports = readFile;