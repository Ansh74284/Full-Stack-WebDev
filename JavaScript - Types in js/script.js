//Primitive and reference

// primitives = numbers
// reference = [] () {}
// aisi koi bhi value  jisko copy karne par real copy nahi hota, balki us main value ka reference pass ho jaata h, use hum refernce value kehte hai, aur jiska copy karne par real copy karne par real copy ho jaae vo value primitve hoti hai.

// var a = 12;
// var b = a;

var a = [1,2,3,4]; //Bracket h toh reference nhi h toh primitive.
var b = a;

b.pop();