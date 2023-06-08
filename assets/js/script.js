const toggleDiv = document.getElementById("toggleDiv");
const buttonToggle = document.getElementById("buttonToggle");

function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/images/menu/bx-menu.png";
    } else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/images/menu/bx-x.png";
    }
}

function buttonClick() {
    if (toggleDiv.style.display !== "flex"){
        toggleDiv.style.display = "flex";
    } else {
        toggleDiv.style.display = "none";
    }
}

 function  feedBack(){
    let res = window.prompt("O que você achou das informações apresentadas no site?");
    if (res){
        window.open('mailto:viniprates2211@gmail.com?subject=FeedBack&body='+res);
        window.alert("Obrigado pelo seu feedback! ");
    } else {
        
    }
}