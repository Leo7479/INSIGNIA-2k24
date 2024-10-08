var loaderSpan = document.getElementsByClassName('loaderspan');
let jumpCounter = 0;
setInterval(()=>{
    loaderSpan[jumpCounter].classList.remove('jump');
    jumpCounter = (jumpCounter+1)%4;
    loaderSpan[jumpCounter].classList.add('jump');
},200);



const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("getUp");
        }
    })
})
const animatable = document.querySelectorAll(".animate");


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

const registerButton = document.getElementById("registerButtonDiv");

window.addEventListener('load', ()=>{
    const splashDiv = document.getElementById('splash');
    splashDiv.style.display="none";
    animatable.forEach((a)=>{observer.observe(a)});
    registerButton.addEventListener("click", ()=>{
        window.open("https://forms.gle/a2F854fL54QmoMjh6", "_blank");
    });
})

const navLi = document.getElementsByClassName("navLi");
for(let i=0;i<navLi.length;i++){
    navLi[i].addEventListener('click', ()=>{
        showMenuBtn.click();
    });
}

const knowmorebtn = document.getElementsByClassName("knowmorebtn");
for(let i=0;i<knowmorebtn.length;i++){
    knowmorebtn[i].addEventListener('click', (e)=>{
        e.target.parentElement.parentElement.classList.add("rotate");
    })
}
const knowlessbtn = document.getElementsByClassName("knowlessbtn");
for(let i=0;i<knowmorebtn.length;i++){
    knowlessbtn[i].addEventListener('click', (e)=>{
        e.target.parentElement.parentElement.classList.remove("rotate");
    })
}