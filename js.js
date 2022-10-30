let darkMode = document.querySelector('.dark-change')
let content= document.getElementsByTagName('body')[0]
const elements= document.querySelectorAll('.dark')

darkMode.addEventListener('click', function(){
darkMode.classList.toggle('active')
content.classList.toggle('night')
elements.forEach( elem =>{
	elem.classList.toggle('theme'); })
});