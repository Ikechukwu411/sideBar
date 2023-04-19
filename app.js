const sideBar = document.querySelector('.sidebar');
const showSideBar = document.querySelector('.sidebar-toggle');
const removeSidebar = document.querySelector('.close-btn');

showSideBar.addEventListener('click',function(){
    sideBar.classList.add('show-sidebar');
})

removeSidebar.addEventListener('click', function(){
 sideBar.classList.remove('show-sidebar');
})