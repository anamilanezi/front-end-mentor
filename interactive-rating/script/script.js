const child = document.querySelectorAll('.child')
const ratings = document.querySelectorAll('.rating');
const userRating = document.querySelector('.user-rating');
const submit = document.getElementById('submit')
let selectedRating;
const outsideClick = [true];


document.addEventListener('click', (e) => {
    const submitClick = submit.contains(e.target);
    if (!submitClick) {
        outsideClick[0] = false;
    }
    
    console.log(outsideClick)
})


submit.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if ((userRating.textContent === "") || !outsideClick[0]) {
        alert("select a rating")
    } else {
        console.log(userRating)
        child[0].classList.remove('active')
        child[1].classList.add('active')
    }
})

for (const r of ratings) {
    r.addEventListener('click', (e) => {
        e.stopPropagation()
        outsideClick[0] = true
        selectedRating = r.children[0].textContent;
        userRating.textContent = selectedRating;
        console.log(userRating);
    });
};