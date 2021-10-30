/*
Commit 1
When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
You can use document.querySelector (or another document method) to select the element, then add an event listener.
HINT: You will notice that the page refreshes whenever you click the button. You need to prevent this from happening using a method you have not used before. Google "javascript event prevent default".
*/
/*
Commit 2
The same thing should happen when I press the enter key from inside the input field
*/


let setColorBtn = document.querySelector("#set-color")
let colorField = document.querySelector("#color-field")
let brushColor = document.querySelector(".brush")

function noRefresh(event) {
    event.preventDefault();
    brushColor.style.backgroundColor = colorField.value
}

// always invoke preventDefault in the first line inside the function

setColorBtn.addEventListener("click", noRefresh)
