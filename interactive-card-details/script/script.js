// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_oninput


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

const btn = document.querySelector('.btn')

const warningName = document.querySelector('.form__warning.name')
const warningNum = document.querySelector('.form__warning.num')
const warningDate = document.querySelector('.form__warning.date')
const warningCvc = document.querySelector('.form__warning.cvc')


formName.addEventListener('input', () => {
    let text = formName.value;
    cardName.textContent = text;
})


formNum.addEventListener('input', () => {
    let num = formNum.value;

    let invalidNum = /^[0-9 ]+$/.test(num);
    if (!invalidNum) {
        addClass(formNum, 'error')
        removeClass(warningNum, 'hidden')
    } else {
        removeClass(formNum, 'error')
        addClass(warningNum, 'hidden')
        cardValMonth.textContent = num;
    }
})

formValMonth.addEventListener('input', (e) => {
    let month = formValMonth.value;
  
    cardValMonth.textContent = month;
})


formCvc.addEventListener('input', (e) => {
    let text = formCvc.value;

    cardCvc.textContent = text;
})



btn.addEventListener('click', (e) => {
    e.preventDefault()

    if (isEmpty(formName.value)) {
        removeClass(warningName, 'hidden');
    }

    if (isEmpty(formValMonth.value) || isEmpty(formValYear.value)) {
        removeClass(warningDate, 'hidden');
    }

    if (invalidMonth(formValMonth.value) || invalidYear(formValYear.value)) {
        warningDate.textContent = "Invalid date"
        removeClass(warningDate, 'hidden')
    }

    if (isEmpty(formCvc.value)) {
        removeClass(warningCvc, 'hidden')
    }
});


const isEmpty = (formValue) => {
    
    if (typeof(formValue) === 'string') {
        
        return formValue === ""
    }

    if (typeof(formValue) === 'number') {
        return formValue === ""
    }

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
// const invalidYear = (year) => {
//     return
// }