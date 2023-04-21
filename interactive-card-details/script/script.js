// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_oninput

const cardNum = document.querySelector('.card-number')

const numInput = document.querySelector('.card-num-input')

const cardGroup = document.querySelectorAll('span')

let g1 = document.querySelector('.g1')

let typedNum = [];

numInput.addEventListener('input', (e) => {
    let text = numInput.value;

    for (let i = 0; i <= 16; i += 4) {
        if (text.length <= 4) {
            cardGroup[3].innerHTML = text
        } else if (text.length <= 8) {
            cardGroup[2].innerHTML = text
        } else if (text.length <= 12) {
            cardGroup[1].innerHTML = text
        } else if (text.length <= 16) {
            cardGroup[0].innerHTML = text
        } else {
            
        }
    }
    // cardNum.innerHTML = text;
})

