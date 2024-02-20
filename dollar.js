let a = window.prompt("enter dollar: ")
let b = document.getElementById("naira")


function convert() {
    d = a * 1200
    b.textContent = `Your equivalent Naira value is ${d}`
}

convert();