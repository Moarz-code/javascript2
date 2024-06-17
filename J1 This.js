//This references to the current executation run time 


//1. Global context 
console.log(this);
// Browser = 'window' Object, Node.js = 'global' Object

//But what is the window object or the global object ?


//2. Object method
//2.1 Methof of a function ? , it calls the object the method is property of 
const video2 = { 
    name: "House of the Dragon",
    playVideo() {
        console.log('Playing the video '+this.name)
    }
}
video2.playVideo()

//2.1 Nested objects 
//When used in nested objects, this refers to the cloest object
const video21 = {
    genre: "Fantasy",
    videos: [ 
        {
            title: "A game of thrones",
            play() { 
                console.log(this.title)
            }
        },

        {
            title: "A feast for crows",
            play() {
                console.log(this.title)
            }
        }
    ] 
}


video21.videos[0].play()




// 3. Constructor Function 
// 

function phones(brand, port) { 
    this.name = brand 
    this.port = port,
    this.printDetails = function() {
        console.log("Brand name: " + this.name) 
        console.log("port type: " + this.port)
    }
}

const s24 = new phones("Samsung", "C")
s24.printDetails()

//4. Explicit binding 
function greet() { 
    console.log("Hello my name is " + this.name)
}
const person = { 
    name: "Alice"
}
greet.call(person);
