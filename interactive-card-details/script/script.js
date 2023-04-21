// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_oninput


const cardName = document.querySelector('.front__info-name');
const formName = document.getElementById('form__name');

const cardNum = document.querySelector('.front__info-num');
const formNum = document.getElementById("form__num");

const cardVal = document.querySelector('.front__info-val')
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
    let text = formNum.value;

    let isNum = /^[0-9 ]+$/.test(text);
    if (!isNum) {
        formNum.classList.add('error')
        warningNum.classList.remove('hidden')
    } else {
        formNum.classList.remove('error')
        warningNum.classList.add('hidden')
        cardNum.textContent = text
    }
})




btn.addEventListener('click', () => {
    if (isEmpty(formValMonth.value) || isEmpty(formValYear.value) || isEmpty(formName.value)) {
        warningDate.classList.remove('hidden');
    }
});


const isEmpty = (formValue) => {
    if (typeof(formValue) === string) {
        return formValue === ""
    }

    if (typeof(formValue) === number) {
        return formValue === ""
    }

}