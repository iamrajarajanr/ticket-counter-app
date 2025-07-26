let num1 = 5
let num2 = 10
let num3 = 0

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let out = document.getElementById("sum-el")


let add = num1 + num2
let sub = num1 - num2
let div = num1 / num2
let mul = num1 * num2



function addition() {
    out.textContent = "Sum: " + add;
}

function subtraction() {
    out.textContent = "Sum: " + sub;
}

function division() {
    out.textContent = "Sum: " + div;
}

function multiplication() {
    out.textContent = "Sum: " + mul;
}




// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


