var fs = require('fs');
var shareDB = require('sharedb');

fs.appendFile('mynewfile1.txt', ' This is my text.',
              function (err) {
  if (err) throw err;
  console.log('Updated!');
})
