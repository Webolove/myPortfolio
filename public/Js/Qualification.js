const Edu = document.getElementById('education'),
     Work = document.getElementById('work');
const edu = document.getElementById('Education'),
    work = document.getElementById('Work');

Edu.addEventListener('click', ()=>{
    work.classList.remove('qualification__active');
    edu.classList.add('qualification__active');
    Edu.classList.add('active_tab');
    Work.classList.remove('active_tab');
})

Work.addEventListener('click', ()=>{
    Work.classList.add('active_tab');
    Edu.classList.remove('active_tab');
    work.classList.add('qualification__active');
    edu.classList.remove('qualification__active');
})