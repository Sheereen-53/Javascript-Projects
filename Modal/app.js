const openmodalBtn = document.querySelector('.btn');
var content = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

openmodalBtn.addEventListener('click', function(){
    console.log(content.classList)
    content.classList.add('open-modal')
})

closeBtn.addEventListener('click', function(){
    content.classList.remove('open-modal')
})