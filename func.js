let words = ['H', 'e', 'l', 'l', 'o',' ', 'I',' ', 'am',' ', 'C', 'i', 'a', 'n']

window.addEventListener('load', ()=>{

    let display = document.querySelector('#hello')

    let count = 0;

    let interv = setInterval(()=>{

        display.innerHTML+=words[count]

        count++

        if(count == words.length){
            clearInterval(interv)
        }

    }, 500);


});

window.onload = ()=>{
    let checker = document.querySelector('#checker');

    checker.checked = true;
}

window.addEventListener('change',()=>{

    let header = document.querySelector('header');
    let body = document.querySelector('body');

    let navigates = document.querySelectorAll('.as');
    let lab = document.querySelectorAll('.label');
    let profiles = document.querySelectorAll('#profile');
    
    let checker = document.querySelector('#checker');

    let modes = document.querySelector("#hello");

    let cur = document.querySelector("#coursor");
    let con = document.querySelector("#contact");

    let about = document.querySelector("#about");

    let navCont = document.querySelector(".navigateCont");



    if(checker.checked){
        header.style.backgroundColor = "rgb(0, 0, 0)";
        navigates.forEach((navs)=>{

            navs.style.color = "rgb(255, 255, 255)";
            navs.style.textShadow = "3px 3px 6px rgb(25, 246, 231)";
        });
        lab.forEach((labs)=>{

            labs.style.color = "rgb(255, 255, 255)";
            labs.style.textShadow = "3px 3px 6px rgb(25, 246, 231)";
        });
        
        modes.style.color = "rgb(255, 255, 255)";
        cur.style.color = "rgb(255, 255, 255)";
        cur.style.textShadow = "3px 3px 6px rgb(25, 246, 231)";
        modes.style.textShadow = "3px 3px 6px rgb(25, 246, 231)";

        navCont.style.backgroundColor = "black"
        about.style.backgroundColor = "black"
        con.style.backgroundColor = "black"
        body.style.backgroundColor = "black"
        body.style.textShadow = "text-shadow: 3px 3px 7px black"
        profiles.forEach((profile) => {
            profile.style.boxShadow = "0 0 10px rgb(25, 246, 231), 0 0 15px rgb(25, 246, 231), 0 0 18px rgb(25, 246, 231)"; 
        });
    }else{
        header.style.backgroundColor = "rgb(255, 255, 255)";
        navigates.forEach((navs)=>{

            navs.style.color = "rgb(0, 0, 0)";
            navs.style.textShadow = "3px 3px 6px rgb(246, 25, 25)";
        });
        lab.forEach((labs)=>{

            labs.style.color = "rgb(0, 0, 0)";
            labs.style.textShadow = "3px 3px 6px rgb(246, 25, 25)";
            
        });
        modes.style.color = "rgb(0, 0, 0)";
        cur.style.color = "rgb(0, 0, 0)";
        cur.style.textShadow = "3px 3px 6px rgb(246, 25, 25)";
        about.style.backgroundColor = "white"
        modes.style.textShadow = "3px 3px 6px rgb(246, 25, 25)";
        con.style.backgroundColor = "white"
        navCont.style.backgroundColor = "white"
        body.style.backgroundColor = "white"
        body.style.textShadow = "text-shadow: 3px 3px 7px white"
        profiles.forEach((profile) => {
            profile.style.boxShadow = "0 0 10px red, 0 0 15px red, 0 0 18px red"; 
        });
    }

});

function showNavigator(){

    let content = document.querySelector('.navigateCont');

    let windowHeight = window.innerHeight;

    let contHtop = content.getBoundingClientRect().top;

    let contHbot = content.getBoundingClientRect().bottom;

    if(contHtop < windowHeight && contHbot > 50){
        content.classList.add('showNav');
    }else{
        content.classList.remove('showNav');

    }
}

window.addEventListener('DOMContentLoaded', showNavigator);
window.addEventListener('scroll', showNavigator);

function showHello(){

    let content = document.querySelector('.helloCont');

    let windowHeight = window.innerHeight;

    let contHtop = content.getBoundingClientRect().top;

    let contHbot = content.getBoundingClientRect().bottom;

    if(contHtop < windowHeight && contHbot > 50){
        content.classList.add('showHello');
    }else{
        content.classList.remove('showHello');

    }

}

window.addEventListener('DOMContentLoaded', showHello);
window.addEventListener('scroll', showHello);

$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
    });
});