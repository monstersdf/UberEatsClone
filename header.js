const sideBar = document.querySelector(".sidebar");
const sideBarClose = document.querySelector(".btnd");
const closeBtn = document.querySelector('.closebtn')
sideBarClose.addEventListener('click',() =>  sideBar.classList.add('openNav'));
closeBtn.addEventListener('click', () => sideBar.classList.remove('openNav'));






