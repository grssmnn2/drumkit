// when specific key is pressed, play sound associated with key code
window.addEventListener('keydown', function () {

    if (event.keyCode === 65) {
        document.getElementById("a").style.color = "red";
        document.addEventListener('keyup', function () {
            document.getElementById("a").style.color = "black";
        })
    }else if (event.keyCode === 83) {
        document.getElementById("s").style.color = "red";
        document.addEventListener('keyup', function () {
            document.getElementById("s").style.color = "black";
        })
    }else if (event.keyCode === 68) {
        document.getElementById("d").style.color = "red";
        document.addEventListener('keyup', function () {
            document.getElementById("d").style.color = "black";
        })
    }else if (event.keyCode === 70) {
        document.getElementById("f").style.color = "red";
        document.addEventListener('keyup', function () {
            document.getElementById("f").style.color = "black";
        })
    }else if (event.keyCode === 74) {
        document.getElementById("j").style.color = "red";
        document.addEventListener('keyup', function () {
            document.getElementById("j").style.color = "black";
        })
    }else if (event.keyCode === 75) {
        document.getElementById("k").style.color = "red";
        document.addEventListener('keyup', function () {
            document.getElementById("k").style.color = "black";
        })
    }else if (event.keyCode === 76) {
        document.getElementById("l").style.color = "red";
        document.addEventListener('keyup', function () {
            document.getElementById("l").style.color = "black";
        })
    }
});

