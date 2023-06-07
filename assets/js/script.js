
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


const toggleDiv = document.getElementById("toggleDiv");
        const buttonToggle = document.getElementById("buttonToggle");

        function buttonClick() {
            if (toggleDiv.style.display !== "flex"){
                toggleDiv.style.display = "flex";
            } else {
                toggleDiv.style.display = "none";
            }
}
