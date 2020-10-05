const { program } = require('commander');
const fs = require('fs');
const validate = require('./validation');
const processOutput = require('./processOutput');

program.storeOptionsAsProperties(true);
program
  .option('-s, --shift <number>', 'shift')
  .option('-i, --input <string>', 'input file')
  .option('-o, --output <string>', 'output file')
  .option('-a, --action <string>', 'action to perform');

program.parse(process.argv);
const {action, shift, input, output} = program;

const isValid = validate(shift, action);
if (!isValid) {
    return;
}

if (!input) {
    process.stdin.on('data', (data) => {
        processOutput(data, output, action, shift);
        return;
    });
} else {
    const fileName = input;
    fs.readFile(fileName, (err, data) => {
        if (err) {
            return console.error(err.message);
        }
        processOutput(data, output, action, shift);
    });
    return;
}
