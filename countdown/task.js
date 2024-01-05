const counter = document.getElementById("timer")


let timer = setInterval(() => {
    counter.textContent = Number(counter.textContent) - 1;
    if (counter.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timer);
    }
}, 1000)