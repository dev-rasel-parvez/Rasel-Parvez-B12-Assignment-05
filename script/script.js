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

        //If coins are less than 20 → stop immediately
        if (coinCount < 20) {
            alert('❌ You do not have sufficient coin. You need at least 20 coins to make a call');
            return; // terminate process
        }

        //Otherwise (coins >= 20) → show call alert
        alert(`📞 Calling ${servicesName} : ${servicesNumber}`);

        //Cut 20 coins
        coinCount = coinCount - 20;
        funGetElById('coin-count').innerText = coinCount;

    });
});


