let screen = document.getElementById("screen");
document.getElementById("container").addEventListener("click", function (event) {
    if ((event.target.innerText) != 'C') {
        screen.value = event.target.innerText;
        console.log(event.target.innerText)
    }
    else {
        screen.value = "";
    }
})