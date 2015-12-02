var fs = require('fs');

var copyFile = function(source, destination, next) {
  // we should read source file first
  fs.readFile(source, function(err, data) {
    if (err) return next(err); // error occurred
    // now we can write data to destination file
    fs.writeFile(destination, data, next);
  });
};

var copyFile1 = function(source, destination, next) {
  // we should read source file first
  fs.readFile(source, function(err, data) {
    if (err) return next(new Error('I cannot do it!')); // error
    // now we can write data to destination file
    fs.writeFile(destination, data, next);
    next(null, destination); // no error occurred, return result
  });
};

copyFile('foo.txt', 'bar.txt', function(err) {
  if (err) {
    // either fs.readFile or fs.writeFile returned an error
    console.log(err.stack || err);
  } else {
    console.log('Success!');
  }
});

copyFile1('foo.txt', 'bar.txt', function(err) {
  if (err) {
    // either fs.readFile or fs.writeFile returned an error
    console.log(err.stack || err);
  } else {
    console.log('Success!');
  }
});
