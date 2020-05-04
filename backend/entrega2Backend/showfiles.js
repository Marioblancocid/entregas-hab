const path = require('path');
const fs = require('fs-extra');
const parseArgs = require('minimist');

var argv = parseArgs(process.argv.slice(2));

for (const file of argv._) {
  let filePath = path.resolve(__dirname, file);
  var stats = fs.statSync(filePath);
  var fileSizeInBytes = stats["size"];
  if (fileSizeInBytes < 10000) {
    fs.readFile(file, { encoding: "utf-8" }, function read(err, data) {
      if (err) {
        throw err;
      }
      console.log(`El archivo ${file} pesa ${fileSizeInBytes} bytes y este es su contenido:
-------------------------------------------------
${data}
-------------------------------------------------`);
    });
  }
    if (fileSizeInBytes >= 10000) {
      throw error('El archivo debe pesar menos que 10kb para abrirlo.')
    };
}