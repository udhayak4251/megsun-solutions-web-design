//navigation active or inactive work
const menuItems = document.getElementsByClassName("menu-items");
function LinkAction() {
    for (let index = 0; index < menuItems.length; index++) {
        const element = menuItems[index];
        element.classList.remove('active')
    }
    this.classList.add('active');

    }
for (let index = 0; index < menuItems.length; index++) {
    const element = menuItems[index];
    element.addEventListener("click", LinkAction);
}


function myFunction(x) {
    x.classList.toggle("change");
}

//navigation active or inactive work for mobile
const menuItemsMobile = document.getElementsByClassName("menu-mobile-items");
function LinkActionForMobile() {
    for (let index = 0; index < menuItemsMobile.length; index++) {
        const element = menuItemsMobile[index];
        element.classList.remove('active-mobile')
    }
    this.classList.add('active-mobile');
    const show = document.querySelector('.menu-mobile-section');
    show.classList.toggle('menu-mobile-section-show');
    const showMenu = document.querySelector('.container');
    showMenu.classList.toggle('change');
    
}
for (let index = 0; index < menuItemsMobile.length; index++) {
    const element = menuItemsMobile[index];
    element.addEventListener("click", LinkActionForMobile);
}


function myFunction(x) {
    x.classList.toggle("change");
    const show = document.querySelector('.menu-mobile-section');
    show.classList.toggle('menu-mobile-section-show');
}
