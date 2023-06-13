window.addEventListener("scroll", function() {
    var parallax = document.querySelector(".parallax");
    var content = document.querySelector(".content");
    var scrollPosition = window.pageYOffset;

    parallax.style.backgroundPositionY = scrollPosition * 0.7 + "px";
    content.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});
