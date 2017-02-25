var promise = new Promise(function(resolve, reject) {
    resolve(1);
});

promise.then(function(val) {
        console.log('a', val); // 1
        return val + 2;
    },
    function(err) {
        console.log('a broke', err); // Error: "It broke"
    }
).then(function(val) {
        console.log('b', val); // 3
        return val + 3;
    },
    function(err) {
        console.log('b broke', err)
    }
).then(function(val) {
        console.log('c', val);
        return val + 5;
    },
    function(err) {
        console.log('c broke', err)
    }
).then(function(val) {
        console.log('d', val);
        return val + 10;
    },
    function(err) {
        console.log('d broke', err)
    }
)