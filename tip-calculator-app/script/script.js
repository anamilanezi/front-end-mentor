
const billTotal = document.getElementById('bill-total')
const numOfPeople = document.getElementById('divisor-total');
const tipButtons = document.querySelectorAll('input.btn');
const tipCustom = document.querySelector('.btn-custom')

const inputValues = document.querySelectorAll('.number-input')

const tipResult = document.querySelector('.tip-result')
const totalResult = document.querySelector('.total-result')

const reset = document.querySelector('.reset')


let selectedTip;

// Add event listener to tip buttons 

tipButtons.forEach((btnActive, i) => {
    btnActive.addEventListener('click', () => {
        selectedTip = btnActive.value

        tipButtons.forEach(btnDisabled => {
            btnDisabled.classList.remove('active')
        })


        // Will only add active class to predifined tip buttons
        if (i <= 4) {
            btnActive.classList.add('active')
            console.log(btnActive.value)
            calculateTip(btnActive.value, billTotal.value, numOfPeople.value)

        }
    })
})

// tipCustom.addEventListener('input', () => {
//     // console.log(typeof(tipCustom.value), billTotal.value, numOfPeople.value)
//     calculateTip(tipCustom.value, billTotal.value, numOfPeople.value)
// })

// billTotal.addEventListener('input', () => {
//     // console.log(typeof(tipCustom.value), billTotal.value, numOfPeople.value)
//     calculateTip(tipCustom.value, billTotal.value, numOfPeople.value)
// })

// numOfPeople.addEventListener('input', () => {
//     // console.log(typeof(tipCustom.value), billTotal.value, numOfPeople.value)
//     calculateTip(tipCustom.value, billTotal.value, numOfPeople.value)
// })


inputValues.forEach((input) => {
    input.addEventListener('input', () => {
        calculateTip(tipCustom.value, billTotal.value, numOfPeople.value)

        // calculateTip(inputValues[1].value, inputValues[0].value, inputValues[2].value)
    })
})



// Fazer uma função construtora, que muda tip 
const calculateTip = (tip, total, num) => {
    if (tip != "" && total != "" && num != "") {
        const tipAmountTotal = parseFloat(total) * (parseInt(tip) / 100);
        const totalPerson = (parseFloat(total) + tipAmountTotal) / parseInt(num);
        const tipPerson = tipAmountTotal / parseInt(num);
    
        tipResult.innerHTML = `$${tipPerson}`;
        totalResult.innerHTML = `$${totalPerson}`;
        reset.disabled = false;
    }
    

}




