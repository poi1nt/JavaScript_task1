// const img = document.getElementById('cookie')
// const click = document.getElementById("clicker__counter")


// click.onclick = () => {
//     click.textContent = Number(click.textContent) + 1;
//     console.log(click.textContent);
// }

// img.onclick = () => {
//     img.width += 20;
//     img.onclick = null;
// }


const img = document.getElementById(`cookie`);
const counter = document.getElementById(`clicker__counter`);
let count = parseInt(counter.textContent);
const newDiv = document.createElement(`div`);
newDiv.className = `clicker__speed`;
let lastClickTime = Date.now();
parentElement = document.getElementsByClassName(`clicker`)[0];
parentElement.insertBefore(newDiv, parentElement.firstChild);

let click = false

img.onclick = () => {
    count += 1
    counter.textContent = count;
    if (click) {
        img.width /= 1.2;
        click = !click
    } else {
        img.width *= 1.2;
        click = !click
    }

}