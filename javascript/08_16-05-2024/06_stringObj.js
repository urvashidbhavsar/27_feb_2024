var str = "HelloWorldHelloUser";
console.log(str.toString());
console.log(str.charAt(4));
console.log(str.charCodeAt(0));
console.log(str.codePointAt(1));
console.log(str.concat(", Welcome"));
console.log(str.indexOf("l"));
console.log(str.lastIndexOf("l"));
console.log(str.search("d"));
console.log(str.match("Hello")); //return ans in array form
console.log(str.match("World"));
console.log(str.replace("World", "User"));
console.log(str.substr(2, 9)); // start - length
console.log(str.substring(2, 9)); // start - end
console.log(str.slice(2, 9));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.split("H"));
str = "                user           "
console.log(str.valueOf());
console.log(str.trim());