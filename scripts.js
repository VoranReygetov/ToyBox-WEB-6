const inputSwapButton = document.querySelector("#inputSwapButton");
inputSwapButton.addEventListener('click', swapInputs);

function swapInputs() {
    let input1Value = document.querySelector("#input1").value;
    let input2Value = document.querySelector("#input2").value;

    document.querySelector("#input1").value = input2Value;
    document.querySelector("#input2").value = input1Value;
}

const decreaseButton = document.querySelector("#decreaseButton");
const increaseButton = document.querySelector("#increaseButton");
decreaseButton.addEventListener('click', decreaseSize);
increaseButton.addEventListener('click', increaseSize);

let square = document.querySelector("#square");
square.style.width = 150 + 'px';
square.style.height = 150 + 'px';

function decreaseSize() {
    let currentSize = square.clientHeight;
    if (currentSize > 15) {
        square.style.width = (currentSize - 15) + 'px';
        square.style.height = (currentSize - 15) + 'px';
    }
}

function increaseSize() {
    let currentSize = square.clientHeight;
    square.style.width = (currentSize + 15) + 'px';
    square.style.height = (currentSize + 15) + 'px';
}

const doubleButton = document.querySelector("#doubleButton");
const powerButton = document.querySelector("#powerButton");
doubleButton.addEventListener('click', doubleValues);
powerButton.addEventListener('click', powerValues);

function doubleValues() {
    let listItems = document.querySelectorAll("#list li");
    listItems.forEach(function(item) {
        let currentValue = Number(item.textContent);
        if (currentValue) {
            item.textContent = currentValue * 2;
        }
    });
}

function powerValues() {
    let listItems = document.querySelectorAll("#list li");
    listItems.forEach(function(item) {
        let currentValue = Number(item.textContent);
        if (currentValue) {
            item.textContent = currentValue ** 2;
        }
    });
}

function categoriesValues(){
    const categoriesList = document.querySelectorAll('#categories .item');

    console.log(`Number of categories: ${categoriesList.length}`);
}

function categoriesItemsValues(){
    const categoriesList = document.querySelectorAll('#categories .item');
    categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemsCount = category.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryName} \nElements: ${categoryItemsCount}`);
});
}


const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = this.elements.email.value.trim();
    const password = this.elements.password.value.trim();

    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: email,
        password: password
    };

    console.log(formData);

    this.reset();
});


const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorButton.addEventListener('click', function() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}


const inputRef = document.querySelector('#controls input');
const boxesRef = document.querySelector('#boxes');

const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes() {
    const amount = inputRef.valueAsNumber;

    if (amount < 1 || amount > 100 || !Number.isInteger(amount)) {
        alert('Please enter a number between 1 and 100');
        return;
    }

    destroyBoxes();

    let boxSize = 30;
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${boxSize}px`;
        div.style.height = `${boxSize}px`;
        div.style.backgroundColor = getRandomHexColor();
        boxesRef.appendChild(div);
        boxSize += 10;
    }

    inputRef.value = '';
}

function destroyBoxes() {
    boxesRef.innerHTML = '';
}

