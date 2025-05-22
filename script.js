
const container = document.getElementById("game-container");
let frogs = ["left", "left", "left", "empty", "right", "right", "right"];

function render() {
    container.innerHTML = "";
    frogs.forEach((type, index) => {
        const div = document.createElement("div");
        div.className = "frog " + type;
        div.addEventListener("click", () => moveFrog(index));
        container.appendChild(div);
    });
}

function moveFrog(index) {
    const emptyIndex = frogs.indexOf("empty");
    const distance = Math.abs(emptyIndex - index);

    if (
        (distance === 1 || distance === 2) &&
        ((frogs[index] === "left" && index < emptyIndex) ||
        (frogs[index] === "right" && index > emptyIndex))
    ) {
        [frogs[emptyIndex], frogs[index]] = [frogs[index], frogs[emptyIndex]];
        render();
    }
}

render();
