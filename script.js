function nextPage() {
    alert("Yay! ❤️ Happy Valentine's Day!");
}

function moveButton() {
    let noButton = document.getElementById("noButton");
    let x = Math.random() * (window.innerWidth - noButton.clientWidth);
    let y = Math.random() * (window.innerHeight - noButton.clientHeight);
    
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
