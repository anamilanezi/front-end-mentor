const child = document.querySelectorAll('.child')
const ratings = document.querySelectorAll('.rating');
const userRating = document.querySelector('.user-rating');
const submit = document.querySelector('#submit')
const errorMsg = document.querySelector('.error-message')
const container = document.querySelector('.container')
let selectedRating;
let outsideClick = true;

// Prevents effect when loading page
document.body.classList.remove('js-stop-transition')


// Calcel last rating selected after clicking outside 
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

// Removes highlightening when note hovering circles 
container.addEventListener('mouseover', () => {
    ratings.forEach(rating => {
        if ((userRating.textContent === "") || !outsideClick) { 
            rating.classList.remove('fill') 
        }
    })
})

// Adding event listener on rating circles
ratings.forEach(
    (rating, i) => {
        // Highlight previous circles when hovering
        rating.addEventListener('mouseover', (e) => {
            e.stopPropagation();
            const smallNum = Array.from(ratings).slice(0, i)
            smallNum.forEach((num) => {
                num.classList.add('fill')
            })
        })

        // Select a rating, updates value and fill previous circles after selecting
        rating.addEventListener('click', (e) => {
            e.stopPropagation();
            errorMsg.classList.add('hidden');
            outsideClick = true;
            selectedRating = i + 1;
            userRating.textContent = selectedRating;
            ratings.forEach((rating, j) => {
                i >= j ? rating.classList.add('fill') : rating.classList.remove('fill');
            })
        })

    })


// Submit results after one is selected
submit.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Checks if the rating was selected and wasn't canceled by click outside
    if ((userRating.textContent === "") || !outsideClick) {
        errorMsg.classList.remove('hidden')
    } else {
        // Do something with userRating and change content visibility 
        console.log(userRating)
        child[0].classList.remove('active')
        child[1].classList.add('active')
    }
})