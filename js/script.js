const submit = document.getElementById ("submit-btn");
const ratesBtns = document.querySelectorAll (".rate");
let rateValue;

ratesBtns.forEach (function (btn) {
    btn.addEventListener ("click", (e) => { 
        rateValue = e.currentTarget.value;
    })
})

function showThanksState () {
    const ratingScreen = document.getElementById ("rating-screen");
    const thanksScreen = document.getElementById ("thank-you-state");

    ratingScreen.setAttribute ("class", "hide");
    thanksScreen.removeAttribute ("class", "hide");

    let youSelected = document.getElementById ("selected");

    youSelected.textContent = "You selected " + rateValue + " out of 5";
}

submit.addEventListener('click', (e) => {showThanksState()});

