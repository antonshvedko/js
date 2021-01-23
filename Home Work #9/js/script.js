let h2 = document.createElement("h2");
document.querySelector("body").appendChild(h2);
h2.textContent = 'Events';

let p1 = document.createElement("p");
document.querySelector("body").appendChild(p1);
p1.textContent = 'Regarding document - X: 000 Y: 000';

let div = document.createElement("div");
document.querySelector("body").appendChild(div);
div.style.height = "400px";
div.style.width = "400px";
div.style.background = "gray";

let p2 = document.createElement("p");
document.querySelector("body").appendChild(p2);
p2.textContent = 'Regarding div - X: 000 Y: 000';

document.addEventListener("mousemove", (event) => {
	p1.textContent = `Regarding document - X: ${event.pageX} Y: ${event.pageY}`;
});

document.querySelector('div').addEventListener("mousemove", (event) => {
    p2.textContent = `Regarding div - X: ${event.offsetX} Y: ${event.offsetY}`;
})