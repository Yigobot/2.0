let images = [
    document.getElementById("slide1"),
    document.getElementById("slide2"),
    document.getElementById("slide3")
]

let num = 0


images[num].classList.add("active")

// btn next
function next () {
    images[num].classList.remove("active");
    if (num < images.length -1) num++
    else num = 0
    images[num].classList.add("active");
}


document.getElementById("arrow-next").addEventListener("click",next)
// btn back
function back () {
    images[num].classList.remove("active");
    if (num > 0) num--
    else num = images.length -1
    images[num].classList.add("active");
}


document.getElementById("arrow-prev").addEventListener("click",back)

