const inputText = document.querySelector("input");

const buttonAdd = document.querySelector("button");

const list = document.querySelector("ul");

buttonAdd.addEventListener("click", function() {
    // console.log("Button waz clicked !");
    // console.log(inputText.value);

const listElement = document.createElement ("li");
    listElement.innerText = inputText.value;
    list.appendChild(listElement);
});
