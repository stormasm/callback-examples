// http://tech.deepumohan.com/2013/07/javascript-pass-function-as-parameter.html

var totalSelectValues = function(values, selector) {
    var sum = 0;
    values.forEach(function(value) {
        if(selector(value)) sum += value;
    });
    return sum;
};

var values = [1,2,3,4,5,6,7,8,9];
// even numbers
value = totalSelectValues(values, function(value) { return value % 2 === 0});
console.log(value)

// odd numbers
value = totalSelectValues(values, function(value) { return value % 2 !== 0});
console.log(value)

// greater than 5
totalSelectValues(values, function(value) { return value > 5 });
console.log(value)

// We also need to make sure our little function works perfectly even if the second argument is not send.

var totalSelectValues = function(values, selector) {
    // handle undefined selector
    if (typeof selector == 'undefined' ) {
        selector = function() {return true;};
    }

    var sum = 0;
    values.forEach(function(value) {
        if(selector(value)) sum += value;
    });
    return sum;
};
