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

        const eventTime = new Date().toLocaleTimeString();
        const historyContainer = funGetElById('history-container');

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
        <div class="rounded-lg text-lg text-gray-700 p-2 px-3 bg-gray-100 mb-6 flex items-center justify-between">
            <div>
              <h1 class="">${servicesName}</h1>
              <h1>${servicesNumber}</h1>
            </div>

            <p>${eventTime}</p>
          </div>

        `
        historyContainer.appendChild(newHistory);


    });
});


// remove history data

const historyClear = funGetElById('history-clear');

historyClear.addEventListener('click', function () {
    const historyContainer = funGetElById('history-container');
    historyContainer.remove();

})





// Challenges Part

// Select all heart buttons
const copyCount = funGetElById('copy-count');

// get copy-count value 
let copyCountValue = Number(copyCount.innerText);

const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach((copyButton) => {
    copyButton.addEventListener('click', function () {

        copyCountValue++
        funGetElById('copy-count').innerText = copyCountValue;

        // Find the service number from the same card
        const serviceNumber = copyButton.parentNode.parentNode.querySelector('h1').innerText;

        // Copy to clipboard
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {

            })
            .catch(err => {

            });
    });
});

