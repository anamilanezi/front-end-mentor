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

// Card Name

formName.addEventListener('input', () => {
    addClass(warningName, 'hidden');
    let text = formName.value;
    cardName.textContent = text;
})


// Card Num

formNum.addEventListener('input', () => {
    warningNum.textContent = "Wrong format, numbers only"
    addClass(warningNum, 'hidden');
    let num = formNum.value;
    let invalidNum = /^[0-9 ]+$/.test(num);
    if (!invalidNum) {
        addClass(formNum, 'error')
        removeClass(warningNum, 'hidden')
    } else {
        removeClass(formNum, 'error')
        addClass(warningNum, 'hidden')
        cardNum.textContent = num;
    }
})

// Date

formValMonth.addEventListener('input', (e) => {
    addClass(warningDate, 'hidden');

    let month = formValMonth.value;  
    cardValMonth.textContent = month;
})

formValYear.addEventListener('input', (e) => {
    addClass(warningDate, 'hidden');

    let year = formValYear.value;
  
    cardValYear.textContent = year;
})

//  CVV

formCvc.addEventListener('input', (e) => {
    addClass(warningCvc, 'hidden');
    let text = formCvc.value;

    cardCvc.textContent = text;
})



btn.addEventListener('click', (e) => {
    
    validForm = [];
    
    e.preventDefault()

    if (isEmpty(formName.value)) {
        removeClass(warningName, 'hidden');
        validForm.push(false);
    }

    if (isEmpty(formNum.value)) {
        warningNum.textContent = "Can't be empty"
        removeClass(warningNum, 'hidden');
        validForm.push(false);
    }

    if (isEmpty(formValMonth.value) || isEmpty(formValYear.value)) {
        
        warningDate.textContent = "Can't be blank"
        removeClass(warningDate, 'hidden');
        validForm.push(false);
    }

    if (invalidMonth(formValMonth.value) || invalidYear(formValYear.value)) {
        console.log(invalidMonth(formValMonth.value),  invalidYear(formValYear.value))
        warningDate.textContent = "Invalid date"
        removeClass(warningDate, 'hidden')
        validForm.push(false);
    } 

    if (isEmpty(formCvc.value)) {
        removeClass(warningCvc, 'hidden')
        validForm.push(false);
    }

    validForm = validForm.every(element => element === true);
    if (validForm) {
        addClass(form, 'submitted')
        removeClass(confirmation, 'hidden')
    }

});


const isEmpty = (formValue) => {
        return formValue == 0 || formValue == ""
}

const removeClass = (el, className) => {
    el.classList.remove(className)
}

const addClass = (el, className) => {
    el.classList.add(className)
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
