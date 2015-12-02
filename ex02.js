var fs = require('fs');

var copyFile = function(source, destination, next) {
  // we should read source file first
  fs.readFile(source, function(err, data) {
    if (err) return next(err); // error occurred
    // now we can write data to destination file
    fs.writeFile(destination, data, next);
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
