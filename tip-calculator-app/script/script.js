const billTotal = document.getElementById('bill-total')
const numOfPeople = document.getElementById('divisor-total');
const tipCustom = document.querySelector('.btn-custom')

const inputValues = [billTotal, tipCustom, numOfPeople]

const tipButtons = document.querySelectorAll('input.btn');

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
            calculateTip(btnActive.value, billTotal.value, numOfPeople.value)

        }
    })
})


inputValues.forEach((input) => {
    input.addEventListener('input', () => {
        let btnActive = document.querySelector('.active')

        if (tipCustom.value === "" && btnActive != null) {
            selectedTip = btnActive
        } else {
            selectedTip = tipCustom
        }
        calculateTip(selectedTip.value, billTotal.value, numOfPeople.value)
    })
})


reset.addEventListener('click', () => {
    tipButtons.forEach(btnDisabled => {
        btnDisabled.classList.remove('active')
    })

    inputValues.forEach(input => {
        input.value = ""
    })

    reset.disabled = true;
    tipResult.innerHTML = "$0.00"
    totalResult.innerHTML = "$0.00"
})



// Function to calculate tip
const calculateTip = (tip, total, num) => {

    if (num == 0 || num == "") {
        document.querySelector('.error-msg').classList.remove('hidden')
        numOfPeople.classList.add('error')
        return
    } else {
        document.querySelector('.error-msg').classList.add('hidden')
        numOfPeople.classList.remove('error')
    }

    if (tip != "" && total != "" && num != "") {
        let tipAmountTotal = parseFloat(total) * (parseInt(tip) / 100);
        let totalPerson = (parseFloat(total) + tipAmountTotal) / parseInt(num);
        let tipPerson = tipAmountTotal / parseInt(num);
        
        totalPerson = roundMoney(totalPerson)
        tipPerson = roundMoney(tipPerson)

        totalResult.innerHTML = `$${totalPerson}`;
        tipResult.innerHTML = `$${tipPerson}`;
        
        reset.disabled = false;
    }
}

const roundMoney = num => (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2)




