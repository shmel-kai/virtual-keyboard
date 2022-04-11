const helpOptions = document.querySelector('.help-options');
const menuItem = document.querySelector('.navigation');

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

menuItem.addEventListener('click', onMenuItemClick);

//        background: linear-gradient(106deg, rgb(116, 88, 68) 0%, rgb(62, 51, 45) 19%, rgb(33, 32, 31) 76%, rgb(35, 33, 34) 100%);


