window.addEventListener("load", function () {
    const loader = document.querySelector(".preloader");
    loader.className += " hidden"; 
    document.getElementById("all").classList.remove("onload");
});