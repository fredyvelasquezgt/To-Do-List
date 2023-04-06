//using the non-null assertion operator
//le dice a typescript que no se preocupe por si es null o no
//lo pongo al final de una expresion que podria ser null
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("submitted")
})

// btn?.addEventListener("click", function() {
//     alert(input.value);
//     input.value = "";
// });

// let mystery:unknown = "hello world";


// const numChars = (mystery as string).length

