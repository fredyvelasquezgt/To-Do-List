//using the non-null assertion operator
//le dice a typescript que no se preocupe por si es null o no
const btn = document.getElementById("btn")!;

btn?.addEventListener("click", function() {
    alert("CLICKED!")
});

