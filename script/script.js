// create some essential function
function funGetElById(id) {
    let selectElement = document.getElementById(id);
    return selectElement;
}

function funGetElByClass(id) {
    let selectElement = document.getElementsByClassName(id);
    return selectElement;
}

//Clicking on the 💗 heart icon of any card will increase the count in the Navbar

// let heart-count value 0
let  heartCount = 0;

// Select all heart buttons
const heartButtons = document.querySelectorAll('.heart-button');

heartButtons.forEach((heartButton) => {
    heartButton.addEventListener('click', function () {
        heartCount ++
        funGetElById('heart-count').innerText = heartCount;
    });
});


