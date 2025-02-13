function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    let noButton = document.getElementById("noButton");
    let x = Math.random() * (window.innerWidth - noButton.clientWidth);
    let y = Math.random() * (window.innerHeight - noButton.clientHeight);
    
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

const noButton = document.getElementById("noButton");

if ("ontouchstart" in window) {
    noButton.addEventListener("touchstart", moveButton);
} else {
    noButton.addEventListener("mouseover", moveButton);
}
