var myCallback = function(data) {
  console.log('got data: '+data);
};

var usingItNow = function(callback) {
  callback('get it?');
};

usingItNow(myCallback);

// http://stackoverflow.com/questions/13286233/pass-a-javascript-function-as-parameter

function addContact(id, refreshCallback) {
    refreshCallback();
    // You can also pass arguments if you need to
    // refreshCallback(id);
}

function refreshContactList() {
    console.log('Hello World');
}

addContact(1, refreshContactList);
