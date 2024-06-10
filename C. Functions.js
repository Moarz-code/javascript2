//1.a conventional functions 
function addNum(num1, num2){ 
    return num1 + num2
}

result = addNum(1,2)
console.log(result )

//1.b conventional functions
function addNum1(num1 = 2,  num2 = 5) { 
    return num1 + num2
}

result = addNum1() //outputs 7 if there is no parameters
console.log(result )

result = addNum1(2,6) //outputs 8 as it takes the parameter
console.log(result)


//2. by using a constant
const add = function (num1, num2) { 
    return num1 + num2; 
} 
 
result = add(1,2)
console.log(result )

//3. Arrow functions 
const multiply = (num1, num2) =>  num1 * num2
result = multiply(2,8)
console.log(result)

const multiply1 = (num1, num2) => { 
    return num1 * num2
}

//Generator function 
function* generatorFunction () { 
    yield 1 
    yield 2 
    yield 3
}

generatorObject = generatorFunction() 
console.log(generatorObject)

// funciton that immediately yeilds a result 

// 8. Constructor functions 
function Person(firstName, lastName, dob) { 
    this.firstName = firstName; 
    this.lastName = lastName ;
    this.dob = new Date(dob);
    this.getAge = function() { 
         return 2024 - this.dob.getFullYear() 
    }
    this.getFullName = function() { 
        return firstName + " " + lastName
    }
}
//dob should be passed into the date constructor

//constructor functions should start with a capital letter

//instantiate 
const person1 = new Person("Jhon", "Doe", "4-3-1980")
const person2 = new Person("Moarz", "Naing Lin Khant", "2005-12-18")

console.log(person2.dob.getDate())
console.log(person2.getAge())
console.log(person2.getFullName())
