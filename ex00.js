var myCallback = function(data) {
    console.log('part one : ' + data);
};

var usingItNow = function(callback) {
    callback('part two...');
};

usingItNow(myCallback);

// http://stackoverflow.com/questions/13286233/pass-a-javascript-function-as-parameter
function addContact(id, refreshCallback) {
    refreshCallback();
    // You can also pass arguments if you need to
    // refreshCallback(id);
}

function refreshContactList(id) {
    console.log('Hello World');
    if (typeof id !== 'undefined') {
        console.log('Your ID = ', id)
    }
}

addContact(1, refreshContactList);