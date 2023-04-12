const child = document.querySelectorAll('.child')
const ratings = document.querySelectorAll('.rating');
const userRating = document.querySelector('.user-rating');
const submit = document.querySelector('#submit')
const errorMsg = document.querySelector('.error-message')
let selectedRating;
let outsideClick = true;


document.addEventListener('click', (e) => {
    const submitClick = submit.contains(e.target);
    if (!submitClick) {
        outsideClick = false;
    }
    
    console.log(outsideClick)
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

for (const r of ratings) {
    r.addEventListener('click', (e) => {
        e.stopPropagation()
        outsideClick = true
        
        errorMsg.classList.add('hidden')
        
        selectedRating = r.children[0].textContent;
        userRating.textContent = selectedRating;
        console.log(userRating);
    });
};

