var fs = require('fs');

var copyFile = function(source, destination, next) {
    // we should read source file first
    fs.readFile(source, function(err, data) {
        if (err) return next(err); // error occurred
        // now we can write data to destination file
        fs.writeFile(destination, data, next);
    });
};

var promise = new Promise(function(resolve, reject) {
    copyFile('foo.txt', 'bar.txt', function(err) {
        if (err) {
            // either fs.readFile or fs.writeFile returned an error
            console.log(err.stack || err);
        } else {
            return true;
        }
    });

    if (copyFile) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
});

promise.then(function(result) {
    console.log(result); // "Stuff worked!"
}, function(err) {
    console.log(err); // Error: "It broke"
});