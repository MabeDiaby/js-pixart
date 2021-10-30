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
/*
Commit 3
Create 20 divs of the "square" class and append them to the body
Hint: use .appendChild()
*/

const setColorBtn = document.querySelector("#set-color")
const colorField = document.querySelector("#color-field")
const brushColor = document.querySelector(".brush")

function noRefresh(event) {
    event.preventDefault();
    brushColor.style.backgroundColor = colorField.value
}


for(let i = 0; i<20; i++) {
    const div = document.createElement("div")
    div.classList.add("square")
    document.body.append(div)
}

// always invoke preventDefault in the first line inside the function

setColorBtn.addEventListener("click", noRefresh)
