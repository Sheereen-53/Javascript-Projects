const color = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.getElementById('btn');
const clr = document.querySelector(".color");

btn.addEventListener('click', function(){
    let temp = '#';
    for(var i=0;i<6;i++){
        a = Math.floor(Math.random()*16);
        temp += color[a];
    }
    document.body.style.backgroundColor = temp;
    clr.innerHTML = temp;
})