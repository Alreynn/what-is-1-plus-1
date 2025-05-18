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
const loadingDisplay = document.getElementById('loading');
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingDisplay.classList.add('animatedDown');
        setTimeout(() => {
            loadingDisplay.classList.remove('animatedDown');
            loadingDisplay.style.display = 'none'
        }, 900)
    }, 100)
})
window.addEventListener('beforeunload', () => {
    loadingDisplay.style.display = 'block'
    loadingDisplay.classList.add('animatedUp');
})
