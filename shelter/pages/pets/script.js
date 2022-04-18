const blockWithCards = document.querySelector('.block-with-cards');

const menuItem = document.querySelector('.navigation');
const burgerMenuItem = document.querySelector('.burger-navigation');


const burgerIcon = document.querySelector('.burger-image');
const burgerIconOpen = document.querySelector('.burger-image-open');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.main-overlay');

const cardsContent = [
    ['../../assets/images/pets-katrine.png','Katrine'],
    ['../../assets/images/pets-jennifer.png','Jennifer'],
    ['../../assets/images/pets-woody.png','Woody'],
    ['../../assets/images/pets-sophia.jpeg','Sophia'],
    ['../../assets/images/pets-timmy.jpeg','Timmy'],
    ['../../assets/images/pets-charly.jpeg','Charly'],
    ['../../assets/images/pets-scarlet.jpeg','Scarlett'],
    ['../../assets/images/pets-fredie.jpeg','Freddie'],
];

cardsContent.forEach(function (card,index) {
    if(index >= 6){
        const div = document.createElement('div');
        div.className = 'card none-display-card';
        div.innerHTML = `<img src=${card[0]} alt="${card[1]}"><p class="name">${card[1]}</p><button class="button-more-info">Learn more</button> `
        blockWithCards.appendChild(div);
    } else if (index >= 3) {
        const div = document.createElement('div');
        div.className = 'card min-size';
        div.innerHTML = `<img src=${card[0]} alt="${card[1]}"><p class="name">${card[1]}</p><button class="button-more-info">Learn more</button> `
        blockWithCards.appendChild(div);
    }else{
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<img src=${card[0]} alt="${card[1]}"><p class="name">${card[1]}</p><button class="button-more-info">Learn more</button> `
        blockWithCards.appendChild(div);
    }
    
});

const onMenuItemClick = ({ target }) => {
    const allMenuItems = [...document.querySelectorAll('.menu-item-link')];
    allMenuItems.forEach(item => item.classList.remove('active'));

    if (target.classList.contains('menu-item-link')) {
        target.classList.add('active');
    }
};

menuItem.addEventListener('click', onMenuItemClick);

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
