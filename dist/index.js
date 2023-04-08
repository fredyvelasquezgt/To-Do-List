"use strict";
//using the non-null assertion operator
//le dice a typescript que no se preocupe por si es null o no
//lo pongo al final de una expresion que podria ser null
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
var form = document.querySelector("form");
var list = document.getElementById("todolist");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submitted");
    var newTodoText = input.value;
    var newLI = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(newTodoText);
    newLI.append(checkbox);
    list.append(newLI);
    input.value = "";
});
// btn?.addEventListener("click", function() {
//     alert(input.value);
//     input.value = "";
// });
// let mystery:unknown = "hello world";
// const numChars = (mystery as string).length
