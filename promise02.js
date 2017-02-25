var promise = new Promise(function(resolve, reject) {
    resolve(1);
});

promise.then(function(val) {
        console.log(val); // 1
        return val + 2;
    },
    function(err) {
        console.log("It broke", err); // Error: "It broke"
    }
).then(function(val) {
        console.log(val); // 3
        return val + 3;
    },
    function(err) {
        console.log(err)
    }
).then(function(val) {
        console.log(val);
        return val + 5;
    },
    function(err) {
        console.log(err)
    }
)