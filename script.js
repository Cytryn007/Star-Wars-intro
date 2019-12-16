var stars = 1200;

function generateStars(i) {
    var x = window.innerWidth;
    var y = window.innerHeight;
    var placeOnx = Math.floor(Math.random() * x);
    var placeOny = Math.floor(Math.random() * y);

    var star = document.createElement("div");
    star.classList.add("star");
    star.style.top = placeOny + "px";
    star.style.left = placeOnx + "px";

    if (i > 0.3 * stars) {
        star.classList.add("far-away-star")
    }
    document.body.appendChild(star);
}

for (var i = 0; i < stars; i++) {
    generateStars(i);
}
