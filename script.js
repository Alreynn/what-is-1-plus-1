const one = document.getElementById('one');
const displayOutput = document.getElementById('output');

let isOneAvailable = false;
let isOnePlusAvailable = false;
let isOnePlusOneAvailable = false;
function displayOne() {
    displayOutput.innerText = '1';
    isOneAvailable = true
}
function displayPlus() {
    if (isOneAvailable === true) {
        displayOutput.innerText = '1' + '+'
        isOnePlusAvailable = true;
    }
}
function displayOne2() {
    if (isOnePlusAvailable === true) {
        displayOutput.innerText = '1' + '+' + '1';
        isOnePlusOneAvailable = true
    }
}
function displayEquals() {
    if (isOnePlusOneAvailable === true) {
        displayOutput.innerText = 1+1;
        isOneAvailable = false;
        isOnePlusAvailable = false;
        isOnePlusOneAvailable = false
    }
}

window.addEventListener('load', () => {
    const loadingDisplay = document.getElementById('loading');
    setTimeout(() => {
        loadingDisplay.classList.add('animated');
        setTimeout(() => {
            loadingDisplay.remove()
        }, 1000)
    }, 200)
})