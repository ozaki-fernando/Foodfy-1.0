const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener("click", function(){
        const img = card.getAttribute("id");
        const title = card.querySelector("h2").innerHTML;
        const contrib = card.querySelector("p").innerHTML;
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src = `/Foodfy 1.1/images/${img}.png`;
        modalOverlay.querySelector("h2").innerHTML = title;
        modalOverlay.querySelector("p").innerHTML = contrib;

    });
}
document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active');
});