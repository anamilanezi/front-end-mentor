const child = document.querySelectorAll('.child')
const ratings = document.querySelectorAll('.rating');
const userRating = document.querySelector('.user-rating');
const submit = document.getElementById('submit')
let selectedRating;

document.addEventListener('click', () => {
    console.log(userRating)
})


submit.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Hello")
    if (userRating.textContent === "") {
        alert("select a rating")
    } else {
        console.log(userRating)
        child[0].classList.remove('active')
        child[1].classList.add('active')
    }
})

for (const r of ratings) {
    r.addEventListener('click', () => {

        selectedRating = r.children[0].textContent;
    
        userRating.textContent = selectedRating;
        console.log(userRating);
    });
};