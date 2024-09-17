

let menu = document.getElementsByClassName('fa-bars')[0]; // Access the first element with class 'fa-bars'
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function() {
    menu.classList.toggle('fa-times'); // Toggle the class 'fa-times' on menu
    navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll' ,() =>{
    menu.classList.remove('fa-times'); 
    navbar.classList.remove('nav-toggle');

});
