document.addEventListener("DOMContentLoaded", function () {
    // This code will only run after the HTML is loaded and ready (DOMContentLoaded)
    document.getElementById("my-github-link").addEventListener("click", function () {
        window.open("https://github.com/alicia-kee", "_blank");
    });
    // _blank tells the browser to open a link in a new tab or window
    document.getElementById("my-linkedin-link").addEventListener("click", function () {
        window.open("https://www.linkedin.com/in/alicia-kee", "_blank");
    });

    document.getElementById("my-email-link").addEventListener("click", function () {
        window.open("mailto:alicia.kxs@gmail.com", "_self");
    });

    // Project links:
    //crochet store
    document.getElementById("crochet-store-live").addEventListener("click", function () {
        window.open("https://alicia-kee.github.io/crochet-store/#/", "_blank");
    });
    document.getElementById("crochet-store-github").addEventListener("click", function () {
        window.open("https://github.com/alicia-kee/crochet-store", "_blank");
    });

    //calculator
    document.getElementById("calculator-live").addEventListener("click", function () {
        window.open("https://alicia-kee.github.io/calculator/", "_blank");
    });
    document.getElementById("calculator-github").addEventListener("click", function () {
        window.open("https://github.com/alicia-kee/calculator", "_blank");
    });

    //bakery
    document.getElementById("bakery-live").addEventListener("click", function () {
        window.open("https://alicia-kee.github.io/bakery-landing-page/", "_blank");
    });
    document.getElementById("bakery-github").addEventListener("click", function () {
        window.open("https://github.com/alicia-kee/bakery-landing-page", "_blank");
    });

    //sketchpad
    document.getElementById("sketchpad-live").addEventListener("click", function () {
        window.open("https://alicia-kee.github.io/etch-a-sketch/", "_blank");
    });
    document.getElementById("sketchpad-github").addEventListener("click", function () {
        window.open("https://github.com/alicia-kee/etch-a-sketch", "_blank");
    });

    //rock paper scissors
    document.getElementById("rps-live").addEventListener("click", function () {
        window.open("https://alicia-kee.github.io/rock-paper-scissors/", "_blank");
    });
    document.getElementById("rps-github").addEventListener("click", function () {
        window.open("https://github.com/alicia-kee/rock-paper-scissors", "_blank");
    });

    //tic tac toe
    document.getElementById("ttt-live").addEventListener("click", function () {
        window.open("https://alicia-kee.github.io/tic-tac-toe/", "_blank");
    });
    document.getElementById("ttt-github").addEventListener("click", function () {
        window.open("https://github.com/alicia-kee/tic-tac-toe", "_blank");
    });

    //footer year:
    document.getElementById("year").textContent = new Date().getFullYear();
});