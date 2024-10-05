var loaderSpan = document.getElementsByClassName('loaderspan');
let jumpCounter = 0;
setInterval(()=>{
    loaderSpan[jumpCounter].classList.remove('jump');
    jumpCounter = (jumpCounter+1)%4;
    loaderSpan[jumpCounter].classList.add('jump');
},200);

window.addEventListener('load', ()=>{
    const splashDiv = document.getElementById('splash');
    splashDiv.style.display="none";
})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("getUp");
        }
    })
})
const animatable = document.querySelectorAll(".animate");
animatable.forEach((a)=>{observer.observe(a)});

const showMenuBtn = document.getElementsByClassName("showMenu")[0];
const menu = document.getElementsByTagName("nav")[0];
showMenuBtn.addEventListener('click', ()=>{
    if(menu.classList.contains("show")){
        menu.classList.remove("show");
        showMenuBtn.classList.remove("shown");
    }
    else{
        menu.classList.add("show");
        showMenuBtn.classList.add("shown");
    }
})