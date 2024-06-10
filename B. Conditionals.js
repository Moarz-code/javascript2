//if statement 

/* if (<condition>) { 
    <code block to execute>
}
*/

const x = 10; 
if (x == 10 ) {
    console.log("x is 10"); 
}

// double vs triple operators 
const y = "10" 
if (y === 10) {
    console.log("y is NOT of the same type")
}
// === checks if the type are the same too 

if ( y === "10") { 
    console.log("y is of the same type");
}

//if else 

if (x == 11) {
    console.log("x is 11");
} else {
    console.log("x is NOT 11");
}

//else if 
if (x == 12) {
    console.log("x is 12")
} else if (x == 11) { 
    console.log("x is 11 and NOT 12")
} else {
    console.log("x is NOT 12 or 11")
}

// ternery operator 
// to assign variable based on a condition 

const color = x > 10 ? "red" : "blue"; 
// const <variable> = <condition> ? <true statement> : <false statement> ; 
console.log(color)

//cases

switch (color) {
    case 'red' : console.log("color is red"); 
    case 'blue' : console.log("color is blue")
    default : console.log("color is neither red or blue")
}