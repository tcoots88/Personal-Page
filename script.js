document.addEventListener("DOMContentLoaded", function() {
    // Set up the parallax effect on page load
    setupParallax();

    // Set up smooth scrolling for sidebar navigation
    setupSmoothScrolling();
});

window.addEventListener("resize", function() {
    // Update the parallax effect on window resize
    setupParallax();
});

window.addEventListener("scroll", function() {
    // Update the parallax effect on scroll
    setupParallax();
});

function setupParallax() {
    var parallaxSections = document.querySelectorAll(".parallax");

    parallaxSections.forEach(function(section) {
        var sectionHeight = window.innerHeight;
        section.style.height = sectionHeight + "px";
    });
}

function setupSmoothScrolling() {
    var links = document.querySelectorAll(".sidebar a");

    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            var target = this.getAttribute("href");
            var targetElement = document.querySelector(target);
            var targetPosition = targetElement.offsetTop;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });
}
