const helpOptions = document.querySelector('.help-options');
const menuItem = document.querySelector('.navigation');
const burgerIcon = document.querySelector('.burger-image');
const burgerIconOpen = document.querySelector('.burger-image-open');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.main-overlay');
const burgerMenuItem = document.querySelector('.burger-navigation');

const iconsOfHelp = [
    ['../../assets/icons/icon-pet-food.png','Pet food'],
    ['../../assets/icons/icon-transportation.png','Transportation'],
    ['../../assets/icons/icon-toys.png','Toys'],
    ['../../assets/icons/icon-bowls-and-cups.png','Bowls and cups'],
    ['../../assets/icons/icon-shampoos.png','Shampoos'],
    ['../../assets/icons/icon-vitamins.png','Vitamins'],
    ['../../assets/icons/icon-medicines.png','Medicines'],
    ['../../assets/icons/icon-collars-leashes.png','Collars / leashes'],
    ['../../assets/icons/icon-sleeping-area.png','Sleeping area'],
]

iconsOfHelp.forEach(function (icon) {
    const div = document.createElement('div');
    div.className = 'help-card';
    div.innerHTML = `<img src=${icon[0]}><p>${icon[1]}</p>`
    // div.innerHTML = `<p>${icon[1]}</p>`

    helpOptions.appendChild(div);
});


const onMenuItemClick = ({ target }) => {
    const allMenuItems = [...document.querySelectorAll('.menu-item-link')];

    allMenuItems.forEach(item => item.classList.remove('active'));

    if (target.classList.contains('menu-item-link')) {
        target.classList.add('active');
    }
};

const onMenuItemClickBurger = ({ target }) => {
    console.log('target', target);
    const allMenuItemsBurger = [...document.querySelectorAll('.menu-item-link-burger')];
    allMenuItemsBurger.forEach(item => item.classList.remove('active-burger'));

    if (target.classList.contains('menu-item-link-burger')) {
        target.classList.add('active-burger');
    }
};

burgerMenuItem.addEventListener('click', onMenuItemClickBurger);


const onBurgerClick = () => {
    const open = burgerMenu.classList.contains('open');

    if (open) {
        burgerMenu.classList.remove('open');
        overlay.classList.remove('display');
        document.body.style.overflow = 'auto';
    } else {
        burgerMenu.classList.add('open');
        overlay.classList.add('display');
        document.body.style.overflow = 'hidden';
    }
};

menuItem.addEventListener('click', onMenuItemClick);

burgerIcon.addEventListener('click', onBurgerClick);
burgerIconOpen.addEventListener('click', onBurgerClick);

//        background: linear-gradient(106deg, rgb(116, 88, 68) 0%, rgb(62, 51, 45) 19%, rgb(33, 32, 31) 76%, rgb(35, 33, 34) 100%);


