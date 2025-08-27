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
let heartCount = 0;

// Select all heart buttons
const heartButtons = document.querySelectorAll('.heart-button');

heartButtons.forEach((heartButton) => {
    heartButton.addEventListener('click', function () {
        heartCount++
        funGetElById('heart-count').innerText = heartCount;
    });
});


// Select all call-button
const callButtonS = document.querySelectorAll('.call-button');

// let coin-count value 0
let coinCount = funGetElById('coin-count').innerText;
console.log(coinCount);

callButtonS.forEach((callButton) => {
    callButton.addEventListener('click', function () {
        const servicesName = callButton.parentNode.parentNode.childNodes[1].childNodes[3].innerText;

        const servicesNumber = callButton.parentNode.parentNode.childNodes[1].childNodes[7].innerText;

        //Show an alert with a message including the service name and number
        alert(`📞 Calling ${servicesName} : ${servicesNumber}`);

        //Each call will cut 20 coins. Reduce Coin after each click.
        coinCount = Number(coinCount) - 20;
        funGetElById('coin-count').innerText = coinCount;

    });
});


