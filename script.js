document.querySelector(".hamburger").onclick = onOpenSideMenu;

function onOpenSideMenu(){
    let menu = document.querySelector('.main-container');
    let hamburger = document.querySelector('.hamburger-container');
    let links = document.querySelector('.links');

    menu.classList.toggle('menu-open');
    hamburger.classList.toggle('hamburger-container-open');
    links.classList.remove('links-moved');
}

document.querySelector(".close-hamburger").onclick = onCloseSideMenu;

function onCloseSideMenu(){
    let menu = document.querySelector('.main-container');
    let hamburger = document.querySelector('.hamburger-container');
    let links = document.querySelector('.links');

    menu.classList.remove('menu-open');
    hamburger.classList.remove('hamburger-container-open');
    links.classList.add('links-moved');
}




