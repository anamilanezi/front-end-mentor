const child = document.querySelectorAll('.child')
const ratings = document.querySelectorAll('.rating');
const userRating = document.querySelector('.user-rating');
const submit = document.querySelector('#submit')
const errorMsg = document.querySelector('.error-message')
const container = document.querySelector('.container')
let selectedRating;
let outsideClick = true;


document.body.classList.remove('js-stop-transition')

document.addEventListener('click', (e) => {
    const submitClick = submit.contains(e.target);
    if (!submitClick) {
        outsideClick = false;
    }
    ratings.forEach(rating => {
        rating.classList.remove('fill')
    })
    console.log(outsideClick)
})

container.addEventListener('mouseover', () => {
    ratings.forEach(rating => {
        if ((userRating.textContent === "") || !outsideClick) { rating.classList.remove('fill') }
    })
})


// for (const r of ratings) {
//     r.addEventListener('click', (e) => {
//         e.stopPropagation()
//         outsideClick = true

//         errorMsg.classList.add('hidden')

//         selectedRating = r.children[0].textContent;
//         userRating.textContent = selectedRating;
//         console.log(userRating);
//     });
// };


ratings.forEach(
    (rating, index1) => {
        rating.addEventListener('mouseover', (e) => {
            e.stopPropagation();
            const smallNum = Array.from(ratings).slice(0, index1)
            console.log(smallNum)
            smallNum.forEach((num) => {

                num.classList.add('fill')
            })
        })
        rating.addEventListener('click', (e) => {
            e.stopPropagation();
            errorMsg.classList.add('hidden');
            outsideClick = true;
            selectedRating = index1 + 1;
            userRating.textContent = selectedRating;
            ratings.forEach((rating, index2) => {
                index1 >= index2 ? rating.classList.add('fill') : rating.classList.remove('fill');
            })
        })

    })

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if ((userRating.textContent === "") || !outsideClick) {
        errorMsg.classList.remove('hidden')
    } else {
        // Do something with userRating
        console.log(userRating)
        child[0].classList.remove('active')
        child[1].classList.add('active')
    }
})