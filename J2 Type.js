//1 Type conversion vs coercion 

// A Type conversion aka type casting
// Converting a value from one type to another explicitly 

// string <=> num 
const str = '123';
const num1 = Number(str); 
const num2 = parseInt(str); 
const num3 = parseFloat(str); 
const num4 = +str //unary operator + 

const num5 = 123 
const str2 = String(num5)
const str3 = num5.toString() 

// boolean <=> string 
const bool = true; 
const str4 = String(bool); 
const str5 = bool.toString(); 

const bool2 = Boolean(str4)

console.log(bool2);


//2 Type coersion 

//A concantenation 
const str21 = "123"; 
const num21 = 456; 
const result = str + num21;  
console.log(result); 

//B Addition and subtraction 


//C Boolean Coercsion 