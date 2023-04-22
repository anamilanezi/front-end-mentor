// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_oninput
const form = document.querySelector('.card__form')
const confirmation = document.querySelector('.card__msg')

const cardName = document.querySelector('.front__info-name');
const formName = document.getElementById('form__name');

const cardNum = document.querySelector('.front__info-num');
const formNum = document.getElementById("form__num");

const cardValMonth = document.querySelector('.front__info-mm')
const cardValYear = document.querySelector('.front__info-yy')

const formValMonth = document.getElementById('form__month');
const formValYear = document.getElementById('form__year');

const cardCvc = document.querySelector('.back__cvc')
const formCvc = document.getElementById('form__cvc')

const btn = document.querySelector('.btn.confirm')

const warningName = document.querySelector('.form__warning.name')
const warningNum = document.querySelector('.form__warning.num')
const warningDate = document.querySelector('.form__warning.date')
const warningCvc = document.querySelector('.form__warning.cvc')

let validForm;


// CARDHOLDER NAME

formName.addEventListener('input', () => {
    addClass(warningName, 'hidden');
    let text = formName.value;
    cardName.textContent = text;
})


// CARD NUMBER

formNum.addEventListener('input', () => {

    testLength(formNum)

    // Hide warning and reset to default value 
    addClass(warningNum, 'hidden');
    setTimeout(() => {
        warningNum.textContent = "Wrong format, numbers only"
    }, 200)

    let num = formNum.value;

    // Test if user enters only number and spaces
    let validNum = /^[0-9 ]+$/.test(num);

    if (!validNum) {
        addClass(formNum, 'error')
        removeClass(warningNum, 'hidden')

    } else {
        removeClass(formNum, 'error')
        addClass(warningNum, 'hidden')

        cardNum.textContent = num;

        // Change brand 
        switch (cardNum.textContent[0]) {
            case "3":
                if (cardNum.textContent[1] == 4 || cardNum.textContent[1] == 7) { 
                    setBrand('amex')
                }
                break;
            case "4":
                setBrand('visa')
                break;
            case "5":
                setBrand('mastercard')
                break;
            case "6":
                setBrand('discover')
                break;
            default:
                console.log("Brand not found")
                break;
        }

    }
})


// DATE
// Month
formValMonth.addEventListener('input', (e) => {
    testLength(formValMonth)

    if (!invalidYear(formValYear.value)) {
        resetForm(formValMonth, warningDate)
    }

    let month = formValMonth.value;
    cardValMonth.textContent = month;


    if (invalidMonth(formValMonth.value)) {
        warningDate.textContent = "Invalid date"
        formError(formValMonth, warningDate)

    }
    }
)

//Year
formValYear.addEventListener('input', (e) => {

    testLength(formValYear)

    if (!invalidMonth(formValMonth.value)) {
        resetForm(formValYear, warningDate)

    }

    let year = formValYear.value;
    cardValYear.textContent = year;

    if (year.length > 1) {
        if (invalidYear(formValYear.value)) {
            warningDate.textContent = "Invalid date"
            formError(formValYear, warningDate)
        }
    }
    }
)

//  CVV

formCvc.addEventListener('input', (e) => {
    testLength(formCvc)
    resetForm(formCvc, warningCvc)

    let text = formCvc.value;

    cardCvc.textContent = text;
})


// BUTTON SUBMIT

btn.addEventListener('click', (e) => {

    validForm = [];

    e.preventDefault()

    if (isEmpty(formName.value)) {
        formError(formName, warningName)
        validForm.push(false);
    }

    if (isEmpty(formNum.value)) {
        warningNum.textContent = "Can't be empty"
        formError(formNum, warningNum)
        validForm.push(false);
    }

    if (isEmpty(formValMonth.value) || isEmpty(formValYear.value)) {
        warningDate.textContent = "Can't be blank"
        validForm.push(false);

        if (isEmpty(formValMonth.value)) {
            formError(formValMonth, warningDate)
        }

        if (isEmpty(formValYear.value)) {
            formError(formValYear, warningDate)

        }
    }

    if (invalidMonth(formValMonth.value) || invalidYear(formValYear.value)) {
        warningDate.textContent = "Invalid date"
        // dateError()
        validForm.push(false);
        if (invalidMonth(formValMonth.value)) {
            formError(formValMonth, warningDate)
        }

        if (invalidYear(formValYear.value)) {
            formError(formValYear, warningDate)

        }
    }

    if (isEmpty(formCvc.value)) {
        formError(formCvc, warningCvc)

        validForm.push(false);
    }

    validForm = validForm.every(element => element === true);
    if (validForm) {
        addClass(form, 'submitted')
        removeClass(confirmation, 'hidden')
    }

});


// FUNCTIONS DEFINITION

const isEmpty = (formValue) => {
    return formValue == 0 || formValue == ""
}

const invalidMonth = (month) => {
    return parseInt(month) < 1 || parseInt(month) > 12
}

const invalidYear = (year) => {
    let currentYear = new Date().getFullYear()
    // Getting only two digits:
    currentYear = currentYear.toString().slice(2)
    return parseInt(year) < parseInt(currentYear)
}

const removeClass = (el, className) => {
    el.classList.remove(className)
}

const addClass = (el, className) => {
    el.classList.add(className)
}

const formError = (field, msg) => {
    addClass(field, 'error')
    removeClass(msg, 'hidden');
}

const resetForm = (field, msg) => {
    removeClass(field, 'error')
    addClass(msg, 'hidden');
}


const setBrand = (brandName) => {

    let brandClassList = document.querySelector('.fa-brands').classList

    // Delete second class if existent
    if (brandClassList.length === 2) {
        brandClassList.remove(brandClassList[1])
    }

    // Change to brand 
    brandClassList.add(`fa-cc-${brandName}`)
}



const testLength = (formInput) => {
    if (formInput.value.length > formInput.maxLength) formInput.value = formInput.value.slice(0, formInput.maxLength);
} 