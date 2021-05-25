const temp = document.querySelector('.color');
const btn = document.querySelectorAll('.btn');
var count = 0;

btn.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('dec')){
            count--;
        } else if (styles.contains('inc')){
            count++;
        } else {
            count = 0;
        }
        if (count > 0){
            temp.style.color = 'green';
        } else if (count < 0){
            temp.style.color = 'red';
        } else {
            temp.style.color = '#222';
        }
        temp.textContent = count;
    })
})

