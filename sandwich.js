// https://www.impressivewebs.com/callback-functions-javascript/

function mySandwich(param1, param2, callback) {
    console.log('Started eating my sandwich.\nIt has: ' + param1 + ', ' + param2);
    callback();
}

mySandwich('ham', 'cheese', function() {
    console.log('Finished eating my sandwich.');
    console.log();
});

//------------------------------------

function mySandwich1(param1, param2, callback) {
    console.log('Started eating my sandwich.\nIt has: ' + param1 + ', ' + param2);
    console.log();
    if (callback) {
        callback();
    }
}

mySandwich1('ham', 'cheese');

//------------------------------------

function mySandwich2(param1, param2, callback) {
    console.log('Started eating my sandwich.\nIt has: ' + param1 + ', ' + param2);
    if (callback && typeof(callback) === "function") {
        callback();
    }
}

mySandwich2('ham', 'cheese', 'vegetables');
