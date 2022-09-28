const container = document.querySelector(".container");
const button = document.querySelector("#btn");
button.textContent = "Go Dark";

button.addEventListener("click", () =>{
    container.classList.toggle("dark");
    if(button.textContent === "Go Dark"){
        button.textContent = "Go Light";
    }else{
        button.textContent = "Go Dark";
    }
})