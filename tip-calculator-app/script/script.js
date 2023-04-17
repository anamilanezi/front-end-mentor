
const billTotal = document.getElementById('bill-total');
const tipButtons = document.querySelectorAll('input.btn');
const numOfPeople = document.getElementById('divisor-total')
const tipResult = document.querySelector('.tip-result')
const totalResult = document.querySelector('.total-result')


let selectedTip;

tipButtons.forEach((btnActive, i) => {
    btnActive.addEventListener('click', () => {
        selectedTip = btnActive.value
        
        tipButtons.forEach(btnDisabled => {
            btnDisabled.classList.remove('active')
        })


        // Will only add active class to predifined tip buttons
        if (i <= 4) {
            btnActive.classList.add('active')
            if (billTotal.value != "" && numOfPeople.value != "" &&) {
                const tip = btnActive.value
                console.log(tip)
                let total;
                // totalResult.innerHTML = `$${total}`
                totalResult.innerHTML = btnActive.value
            }
        }
        // Will calculate the 
        


    })
})

const tipCalculator = (total, tip, num) => {
    const tipAmount = total * (tip / 100)
}


