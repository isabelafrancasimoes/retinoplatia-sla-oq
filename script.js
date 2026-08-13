document.querySelectorAll(".flashcard").forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});

const container = document.getElementById("background-blobs");

const colors = [

    "#8A6A52",
    "#A98562",
    "#C5A789",
    "#DCC8B4",
    "#B08A68"

];

for(let i=0;i<12;i++){

    const blob = document.createElement("div");

    blob.className = "blob";

    const size = Math.random()*220+180;

    blob.style.width = size + "px";
    blob.style.height = size + "px";

    blob.style.background = colors[Math.floor(Math.random()*colors.length)];

    blob.style.left = Math.random()*100 + "%";
    blob.style.top = Math.random()*100 + "%";

    blob.style.animationDuration = (25 + Math.random()*20) + "s";

    blob.style.animationDelay = (-Math.random()*20) + "s";

    container.appendChild(blob);

}
