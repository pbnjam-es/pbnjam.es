var style = getComputedStyle(document.body)
var playing = false
var firstclick = false

function audio() {
    if (playing === false) {
        document.getElementById("audio").play();
        playing = true;
    }
    else {
        document.getElementById("audio").pause();
        playing = false;
    }
}

buttontext = document.getElementById("play-text")
buttondiv = document.getElementById("play-div")

async function wait(time) {
    // await setTimeout(() => {}, time * 1000)
    await new Promise(resolve => setTimeout(resolve, time * 1000))
}
async function play() {
    audio()
    if (firstclick === false) {
        buttontext.classList.add("played")
        button.classList.add("firstclick")
        firstclick = true
        await wait(1)
    }
    button = document.getElementById("play-button")
    img = document.createElement("img");
    img.id = "pause-button"
    img.style.width = "64px"
    img.style.height = "54px"
    img.style["margin-top"] = "-30px"
    img.src = "static/media/media/pause.jpg"
    img.addEventListener("click", function() {
        pause()
    })
    button.classList.add("played")
    // await wait(1)
    img.classList.add("start")
    buttondiv.appendChild(img)
    buttondiv.removeChild(button)
}

async function pause() {
    audio()
    var button = document.getElementById("pause-button")
    img = document.createElement("img");
    img.id = "play-button"
    img.style.width = "64px"
    img.style.height = "64px"
    img.style["margin-top"] = "-30px"
    img.src = "static/media/media/play.png"
    img.addEventListener("click", function() {
        play()
    })
    button.classList.add("played")
    // await wait(1)
    img.classList.add("start")
    buttondiv.appendChild(img)
    buttondiv.removeChild(button)
}
button = document.getElementById("play-button")
button.addEventListener('click', function() {
    button.classList.add("firstclick")
    play()
})

document.addEventListener("scroll", function(){
    var scrollTop = document.documentElement.scrollTop
    var torus = document.getElementById("torus")
    var water = document.getElementById("water")
    var float = document.getElementById("float")
    var explode = document.getElementById("explode")
    console.log(scrollTop)
    console.log(explode.style.opacity)
    console.log(torus.style.opacity)
    console.log(water.style.opacity)
    console.log(float.style.opacity, "yees")
    if (scrollTop < 70) {
        document.getElementsByTagName("body")[0].style["background-color"] = "rgb(255,255,255)"
        torus.style.opacity = 0
        water.style.opacity = 0
        float.style.opacity = 0
        explode.style.opacity = 0
    }
    else if (scrollTop < 1086) {
        factor = (scrollTop)/400
        document.getElementsByTagName("body")[0].style["background-color"] = "rgba(0,0,0," + factor + ")"
        arrow = document.getElementById("down-arrow")
        attribution = document.getElementById("attribution")
        torus.style.opacity = (scrollTop)/400
        arrow.style.opacity = 1 - (scrollTop)/300
        attribution.style.opacity = 1 - (scrollTop)/300
        button.style.opacity = 1 - (scrollTop)/300
        water.style.opacity = 0
    }
    else if (scrollTop < 2880) {
        factor = (scrollTop - 1086)/400        
        torus.style.opacity = (1 - factor)
        water.style.opacity = factor
        float.style.opacity = 0
    }
    else if (scrollTop < 3770) {
        factor = (scrollTop - 2880)/200
        torus.style.opacity = 0
        water.style.opacity = 1 - factor
        float.style.opacity = factor
    }
    else if (scrollTop < 7985) {
        factor = (scrollTop - 3770)/300
        torus.style.opacity = 0
        float.style.opacity = 1 - factor
        document.getElementsByTagName("body")[0].style["background-color"] = "rgba(0,0,0," + factor + ")"
        explode.style.opacity = 0
    }
    else {
        factor = (scrollTop - 7985)/400
        explode.style.opacity = factor
    }
})

function mouseover(image) {
    // document.documentElement.style.setProperty("--width", image.width)
    // document.documentElement.style.setProperty("--updatedwidth", 1.05 * image.width)
    console.log(style.getPropertyValue("--width"))
    // image.width = 1.05 * image.width
    // image.height = 1.05 * image.height
    // image.classList.add("pop")
}

// function mouseout(image) {
//     image.classList.remove("pop")
//     // image.width = 1/1.05 * image.width
//     // image.height = 1/1.05 * image.height
// }