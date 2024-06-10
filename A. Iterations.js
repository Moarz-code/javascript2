// Count controlled loops

for (let i = 1; i <=10; i++ ){
    if (i % 5 == 0 && i %  3 == 0) {
        console.log(i + ": FizzBuzz");
    } else if (i % 3 == 0 ) {
        console.log(i + ": Fizz");
    } else if (i % 5 == 0){
        console.log(i + ": Buzz");
    }
}


//Condition controlled
let i = 1 
while (i < 10) { 
    console.log(i);
    i = i + 3;
}


const toDos = [
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


//for of 
for (let todo of toDos) { 
    console.log(todo);
}

//Higher order array elements
// forEach, map, filter 

toDos.forEach(function(i) { 
    console.log(i)
})


const todoText = toDos.map(function(i) { 
    return i.name;
    //This returns an array
})
console.log(todoText );

const toDoLeft = toDos.filter(function(i) {
    return i.isCompleted=== false ;
});

console.log(toDoLeft)

//Learn how to stack up these higher order functions
//This is functional programming