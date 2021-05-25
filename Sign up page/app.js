const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
    var styles = sidebar.classList;
    console.log(styles)
    if(styles.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar');
    } else {
        sidebar.classList.add('show-sidebar');
    }
})

closeBtn.addEventListener('click',function(){
    console.log('2')
    sidebar.classList.remove('show-sidebar');
})

function nopes(){
    alert("Page Not Ready Yet!");
}