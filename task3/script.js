const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

let currentColor = null;

function turnRed () {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('red');
    currentColor = 'red';
}

function turnYellow () {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl3.style.background = ('black');
    currentColor = 'yellow';
}

function turnGreen () {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    currentColor = 'green';
}

function turnColor () {
    if (!currentColor) {
        turnGreen();
    }else if (currentColor == 'green') {
        turnYellow();
    }else if (currentColor == 'yellow') {
        turnRed();
    }else if (currentColor == 'red') {
        turnGreen();
 }
}

trafficLightEl1.addEventListener('click', turnColor);
trafficLightEl2.addEventListener('click', turnColor);
trafficLightEl3.addEventListener('click', turnColor);

