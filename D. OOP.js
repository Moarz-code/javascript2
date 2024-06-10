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


//
class Person { 

}

