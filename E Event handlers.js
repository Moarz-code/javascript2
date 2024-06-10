//Single element 
console.log(window);
console.log("hi");

//alert(1);
//alert is a method of the object window ? 
//window.alert("HI")


const form = document.getElementById('my-form')
console.log(form)


console.log(document.querySelector('container')) //works like j query
//can be used to select classes


//Multiple element selectors


//can manipulate html in javascript 
console.log(document.querySelectorAll('.item'));

const button = document.querySelector('.btn');


button.addEventListener('click', function (e)
{
    e.preventDefault;
    button.style.background = 'red';
    }
)

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const msg = document.querySelector(".msg")
const userList = document.querySelector("#users")

myForm.addEventListener('submit', onSubmit); 

function onSubmit(e) { 
    e.preventDefault();

    if (nameInput.value === "" || emailInput.value === "") {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else { 
        const li = document.createElement('li') 
        li.appendChild(document.createTextNode(nameInput.value + " " + emailInput.value))
        
        userList.appendChild(li)

        //Clear fields 
        nameInput.value = ''; 
        emailInput.value = ''; 
    }

}
