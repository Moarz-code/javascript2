//Arrays 

/* This is a multiline 
comment */ 

//1. Declaration
const numbers = new Array(1,2,3,4,5); // this uses an array constructor
console.log(numbers); 

const fruits = ["Apple", "Orange", "Strawberries"];

console.log(fruits)

// no need to assign the length of the array first 
// statically typed so no need to assign data types first
// typescript is a superset of javascript and one of the 
//features they added is statically typed

//2. Adding
fruits[3] = 'Grapes'; 
console.log(fruits);

//Even though we used const we can still add values to it ? 

fruits[3] = "Bananas";
console.log(fruits);
// and we can still reassign some of the values? 

// const fruits = ["Banana", "Peach"]
//what you can't do is to reassign the entire array 

fruits.push("Mangos")
console.log(fruits)
// this is useful if you wan't to add at the end of Array 
// and don't know the index number 


fruits.unshift("Durian"); 
//This adds to the beginning of the array 


//3. Remove
fruits.pop() 


//4. Check if something is there ? 
console.log(Array.isArray("Durian"))
// is there fore checking if it is in any array ?

console.log(fruits.indexOf("Bananas"));