var str = "Hello World";
// var ptn = /^[a-z]*$/i
var ptn = /^[a-zA-Z\s]*$/
if (ptn.test(str)) {
    console.log("true");
} else {
    console.log("false");
}
