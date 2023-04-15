const questions = document.querySelectorAll('.faq-question-box')

console.log(questions)

questions.forEach(question => 
    question.addEventListener('click', () => {
        questions.forEach(q => {
            q.querySelector('.faq-question').classList.remove('active');
            q.querySelector('.faq-arrow').classList.remove('up');
            q.nextElementSibling.classList.add('hidden');
        });
        question.querySelector('.faq-question').classList.toggle('active');
        question.querySelector('.faq-arrow').classList.toggle('up');
        question.nextElementSibling.classList.toggle('hidden');
    }
    ))