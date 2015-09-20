// a^=b, b^=a, a^=b - swap variables using XOR operation, 
// details: http://en.wikipedia.org/wiki/XOR_swap_algorithm

var a = 10;
var b = 99;
a^=b, b^=a, a^=b;
console.log('a', a);
console.log('b', b);