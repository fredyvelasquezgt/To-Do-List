"use strict";
//using the non-null assertion operator
//le dice a typescript que no se preocupe por si es null o no
//lo pongo al final de una expresion que podria ser null
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
var form = document.querySelector("form");
var list = document.getElementById("todolist");
var todos = [];
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    input.value = "";
});
function createTodo(todo) {
    var newLI = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
// btn?.addEventListener("click", function() {
//     alert(input.value);
//     input.value = "";
// });
// let mystery:unknown = "hello world";
// const numChars = (mystery as string).length
