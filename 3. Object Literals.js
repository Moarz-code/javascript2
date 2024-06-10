//Declaration

const person = {
    firstName: "John",
    lastName : "Doe",
    age: 30, 
    hobbies: ["music", "movies", "sports"],

//an object can be embedded meaning it can contain another object
    address: { 
        street: "50 main st",
        city: "Boston",
        state: "MA"
    }

}

console.log(person)

//getting the properties
console.log(person.hobbies[1]); 
console.log(person.address.city);


//destructuring 

const {firstName, nLastName} = person;
console.log(firstName);

const{address:{city}} = person;
console.log(city) ;

//Add
person.favColor = 'Green';
console.log("My favourite color: " + person.favColor);

//Array of objects

const toDo = [
    {
        id: 1, 
        name: "Finish learning basic javascript", 
        isCompleted: false, 
    }, 
    {
        id: 2, 
        name: "College admission" ,
        isCompleted: false, 

    }, 
    {
        id: 3, 
        name: "ADP admission", 
        isCompleted: false, 
    }
]

console.log(toDo[2].name);

toDo[2].isCompleted = true;

const todoJSON = JSON.stringify(toDo); 
console.log(todoJSON);