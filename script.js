var tulip = document.getElementById("tulip-img")
var ground = document.getElementById("ground")
var textbox = document.getElementById("textbox")
var junimo1 = document.getElementById("junimo1")
var junimo2 = document.getElementById("junimo2")



tulip.addEventListener("click", pullCrop);

ground.addEventListener("animationend", function() {
    ground.style = "opacity: 0%;";
});

function pullCrop() {

    tulip.removeEventListener("click", pullCrop)
    console.log("nice")

    var audio = new Audio('stardew_pluck.mp3');
    audio.currentTime = 0.65
    audio.play();

    tulip.classList.remove("sway")
    tulip.classList.add("pop-out")

    ground.classList.add("make-invisible")
    textbox.classList.remove("invisible")
    textbox.classList.add("visible")

    junimo1.classList.add("slide-in")
    junimo2.classList.add("slide-in")
}
