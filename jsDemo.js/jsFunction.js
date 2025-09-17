function hello(user) {
    console.log(`Hello ${user}`);
}

// Global sum function
function sum(a, b) {
    return a + b;
}

// Higher-order function (callback use kar raha hai)
function f1(user, callback) {
    console.log(`Hello ${user}`);
    callback(10, 5); // callback ko arguments bhi pass kar sakte ho
}

// Call f1 with sum as callback
f1('admin', sum);

hello();           // Hello undefined
hello('Rahul');    // Hello Rahul

const z = sum(16, 8);
console.log(z);    // 24
