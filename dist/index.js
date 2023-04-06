"use strict";
//using the non-null assertion operator
//le dice a typescript que no se preocupe por si es null o no
//lo pongo al final de una expresion que podria ser null
var btn = document.getElementById("btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    alert("CLICKED!");
});
var mystery = "hello world";
var numChars = mystery.length;
