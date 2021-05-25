const colors = ['Blue', 'Green', 'Red', 'Yellow'];
const btn = document.querySelector('.ui');

btn.addEventListener('click',function(){
    const temp = Math.ceil(Math.random()*4);
    console.log(temp);
    document.body.style.backgroundColor = colors[temp - 1];
    document.querySelector('.bg-color').innerHTML = colors[temp - 1];
})