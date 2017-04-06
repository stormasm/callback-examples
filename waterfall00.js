const async = require('async')

async.waterfall([
    function(callback) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
        // The length property specifies the number of arguments expected by the function.
        console.log(callback.length);
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        console.log(arg1);
        console.log(arg2);
        callback(null, 'three');
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        console.log(arg1);
        callback(null, 'done');
    }
], function (err, result) {
    // result now equals 'done'
    console.log(result);
});
