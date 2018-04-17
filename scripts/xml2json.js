const xml2json = require('xml2json');
const argv = require('yargs')
    .usage('$0 --xml [XSD filename]')
    .describe('xml', 'The source XML file')
    .demand('xml')
    .argv;
const fs = require('fs');


fs.readFile(argv.xml, 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    console.log(JSON.stringify(xml2json.toJson(data, {object: true}), null, 2));
});



