type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";
myResult = "pass";
// myResult = "failure"; // Error

console.log(myResult);
console.log(typeof(myResult));