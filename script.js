if (window.location.pathname.includes("index.html")) {
    alert("Welcome To My Portfolio");
}

let texts = ["Software Developer", "Frontend Developer", "Web Developer"];
let i = 0;

setInterval(() => {
    document.querySelector(".web").textContent = texts[i];
    i = (i + 1) % texts.length;
}, 2000);

 AOS.init();