'use strict';

const fs = require('fs');

const resolve = console.log,
      reject  = console.log;

const text =
  new Promise(function (resolve, reject) {
    fs.readFile('text.txt', function (err, text) {
      if (err)
        reject(err);
      else
        resolve(text.toString());
    })
  })
  .then(resolve)
  .catch(reject);
