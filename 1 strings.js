const name = 'John'; 
const age = 30;

// Concatenation 

console.log("My name is " + name + " and my age is " + age)
console.log(`My name is ${name} and I am ${age} years old`)

//length
const s = "Hello World"
console.log(s.length) //this is a property 
// as it is a property it doesn't have a () 


console.log(s.substring(0,5));// mid function ? 
console.log(s.substring(0,5).toUpperCase()); //can stack up 


//To convert into arrays
console.log(s.split(''));
const brands = "Samsung, Apple, Lenovo"
brands.split(",")
console.log(brands)// notice here you still get the string 
console.log(brands.split(","))// here you get the the array 

