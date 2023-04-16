// const questionBoxes = document.querySelectorAll('.faq-question-box')



// questions.forEach(question => 
//     question.addEventListener('click', () => {
//         questions.forEach(q => {
//             q.querySelector('.faq-question').classList.remove('active');
//             q.querySelector('.faq-arrow').classList.remove('up');
//             q.nextElementSibling.classList.add('hidden');
//         });
//         question.querySelector('.faq-question').classList.toggle('active');
//         question.querySelector('.faq-arrow').classList.toggle('up');
//         question.nextElementSibling.classList.toggle('hidden');
//         console.log("Finished")
//     }
//     ))

// questionBoxes.forEach(questionBox =>
//     questionBox.addEventListener('click', () => {

//         let question = questionBox.querySelector('.faq-question').classList;
//         let arrow = questionBox.querySelector('.faq-arrow').classList;
//         let answer = questionBox.nextElementSibling.classList;

//         if (question.contains('active')) {
//             questionBox.querySelector('.faq-question').classList.toggle('active');
//             questionBox.querySelector('.faq-arrow').classList.toggle('up');
//             questionBox.nextElementSibling.classList.toggle('hidden');
//             console.log("Finished")
//         } else {
//             questionBoxes.forEach(q => {
//                 q.querySelector('.faq-question').classList.remove('active');
//                 q.querySelector('.faq-arrow').classList.remove('up');
//                 q.nextElementSibling.classList.add('hidden');
//             });
//             questionBox.querySelector('.faq-question').classList.toggle('active');
//             questionBox.querySelector('.faq-arrow').classList.toggle('up');
//             questionBox.nextElementSibling.classList.toggle('hidden');
//             console.log("Finished")
//         }
//     }
//     ))

const questionBoxes = document.querySelectorAll('.faq-group')

questionBoxes.forEach(q => {
    q.addEventListener('click', (e) => {
        if (e.target.parentElement.open == true) return e.target.parentElement = false
        questionBoxes.forEach(element => element.parentElement.open = false)

            e.target.parentElement.open = false
    })
})