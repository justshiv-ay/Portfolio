let name = "Shiv";

console.log(name);

const profession = "cybersecurity";

console.log(profession);

const heading = document.querySelector("h1");
heading.textContent = "Welcome to My Portfolio";

const theme= document.querySelector("#theme");
theme.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});