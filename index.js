

const readFile = require('./library/readFile.js');
const jsonParse = require('./library/jsonParse.js');

(async() => {

    const items =['arbata', 'kvepalai', 'masina', 'kebabas'];

    const itemInfo = [];

    for (const item of items) {
        const content  = await readFile(item);

        if(typeof content === 'string') {
            if(jsonParse(content)[0]!== true){
            itemInfo.push(jsonParse(content)[1]);
        } else {console.log('Parsing error', item)}
    } else {
        console.log('No such File:', item);
    }
}
    console.log(itemInfo);


    const shop = [];




})();






/*
UZDUOTIS:
- perskaityti visu produktu failus;
- susideti visus produktus i viena bendra masyva;
- isspausdinti produktu lentele, kuri atordys taip (zr. zemiau)
"Univermagas" pardavime turi:
-----------------------------
1) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
2) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
3) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
-----------------------------
Parduotuves suvestine:
- turimu prekiu sandelyje: [total kiekis]
- parduotu prekiu: [total kiekis]
- suprekiauta suma: [total pinigu] [valiuta]
- galimu pardavimu: [total pinigu] [valiuta]
- maksimalus galima parduotuves apyvarta: [total pinigu] [valiuta]
*/


