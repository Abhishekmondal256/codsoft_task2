$(document).ready(function(){
$('.slider').slick({
arrows:false,
dots:true,
appendDots:'.sliderdots',
dotsClass:'dots'

})
let times=document.querySelector('.times');
let hamburger=document.querySelector('.hamburger');

let mobileNav = document.querySelector('.mobile-nav');
hamburger.addEventListener('click',function(){
    mobileNav.classList.add('open');  

})
times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});
})