const async = require('async')

async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
], function (err, result) {
    // result now equals 'done'
    console.log(result)
});
function myFirstFunction(callback) {
    console.log(callback.length);    
    callback(null, 'one', 'two');
}
function mySecondFunction(arg1, arg2, callback) {
    console.log(arg1);
    console.log(arg2);
    // arg1 now equals 'one' and arg2 now equals 'two'
    callback(null, 'three');
}
function myLastFunction(arg1, callback) {
    console.log(arg1);
    // arg1 now equals 'three'
    callback(null, 'done');
}
