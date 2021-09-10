


function operation(array, sign) {
    let separated = array.split(sign);
    let screenField = document.getElementById("output");
    if (sign === '+') {
        let add = (parseFloat(separated[0]) + parseFloat(separated[1]));
        screenField.value = add;
        screenField.style.textAlign = "left";
        screenField.style.fontSize = "40px";
    }
    if (sign === '-') {
        let sub = (parseFloat(separated[0]) - parseFloat(separated[1]));
        screenField.value = sub;
        screenField.style.textAlign = "left";
        screenField.style.fontSize = "40px";
    }
    if (sign === 'X') {
        let mul = (parseFloat(separated[0]) * parseFloat(separated[1]));
        screenField.value = mul;
        screenField.style.textAlign = "left";
        screenField.style.fontSize = "40px";
    }
    if (sign === '/') {
        let div = (parseFloat(separated[0]) / parseFloat(separated[1]));
        screenField.value = div;
        screenField.style.textAlign = "left";
        screenField.style.fontSize = "40px";
    }
}

function calculation(array) {
    for (let i = 1; i < array.length; i++) {
        if (isNaN(array[i])) {
            return operation(array, array[i]);
        }
    }
}
let box = [];
let screenField = document.getElementById("output");
let equalCount = 1;
document.getElementById("container").addEventListener("click", (event) => {
    screenField.style.textAlign = "right";
    screenField.style.fontSize = "20px";
    let currentValue = event.target.innerText;
    if (currentValue === 'C') {
        screenField.value = "";
    }
    else {
        let nowOnScreen = screenField.value;
        let finalValue = nowOnScreen + currentValue;
        screenField.value = finalValue;

        if (event.target.innerText == '=') {
            calculation(nowOnScreen);
        }
    }
});