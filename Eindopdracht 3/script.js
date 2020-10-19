//global variable declarations
let menuBtn = document.querySelector('.color-menu');
let getMenuItems = document.querySelectorAll('.color-menu__item');
let getRadioInput = document.querySelectorAll('input[type="radio"]');
let userPreviousColorChoice = false;
const getBackground = document.querySelector('body');

//function declarations
//displays an uppercased color name
let setTitle = function (word) {
    let getTitle = document.querySelector('.color-description h1');
    getTitle.textContent = word[0].toUpperCase() +
        word.slice(1);
}

// sets background color
let setBackground = function (color) {
    if (userPreviousColorChoice) {
        getBackground.classList.replace(`${userPreviousColorChoice}`, `${color}`);
    } else {
        getBackground.classList.add(`${color}`);
    }

    userPreviousColorChoice = color;
}

//toggles text color for readability
let textColor = function (color) {
    if (color == 'white') {
        getBackground.style.color = 'black';
    } else {
        getBackground.style.color = 'white';
    }
}

//marks radio button of active color as checked
let markAsChecked = function (color) {
    getRadioInput.forEach(item => {
        if (item.value === color) {
            item.checked = true;
        }
    });
}

//calls all toggle functions for easier use
let toggleColor = function (userInput) {
    setTitle(userInput);
    setBackground(userInput);
    textColor(userInput);
    markAsChecked(userInput);
}

// add eventlisteners for various inputs
//toggles menu on click
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('clicked');
});

// toggles menu on hover
menuBtn.addEventListener('mouseover', () => {
    menuBtn.classList.add('clicked');
});
menuBtn.addEventListener('mouseout', () => {
    menuBtn.classList.remove('clicked');
});

//listens for click events on menu items
getMenuItems.forEach(item => {
    item.addEventListener('click', event => {
        //stores the class modifier (BEM-principle) bijv:'white' as userchoice
        let userChoice = event.target.classList[1].slice(18)
        toggleColor(userChoice);
    })
});

//listens for click events on radio buttons 
getRadioInput.forEach(item => {
    item.addEventListener('click', event => {
        //stores the value of target radio button as userchoice
        let userChoice = event.target.value;
        toggleColor(userChoice);
    })
});

// toggles color based on keyboard input
getBackground.addEventListener('keypress', event => {
    let keyboardInput = parseFloat(event.key);

    switch (keyboardInput) {
        case 1:
            toggleColor('white');
            break;
        case 2:
            toggleColor('red');
            break;
        case 3:
            toggleColor('blue');
            break;
        case 4:
            toggleColor('green');
            break;
        case 5:
            toggleColor('purple');
            break;
        case 6:
            toggleColor('yellow');
            break;
        case 7:
            toggleColor('orange');
            break;
        case 8:
            toggleColor('black');
            break;
    }
});