function flip(card) {
    if (!card.classList.contains("unavailable")) {
        card.classList.toggle("flipped");
    }
}

function copyText(id) {
    const text = document.getElementById(id).innerText;

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied: " + text);
        })
        .catch(() => {
            alert("Copy failed");
        });
}
