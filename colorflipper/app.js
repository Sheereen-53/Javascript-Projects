const color=["red", "green", "yellow", "blue"];
const btn = document.getElementById('btn');
const clr = document.querySelector(".color");

btn.addEventListener('click', function(){
    a = Math.floor(Math.random()*4);
    document.body.style.backgroundColor = color[a];
    clr.innerHTML = color[a]
    clr.style.color = color[a]
})
