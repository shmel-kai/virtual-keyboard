const blockWithCards = document.querySelector('.block-with-cards');

const menuItem = document.querySelector('.navigation');

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

cardsContent.forEach(function (card) {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<img src=${card[0]}><p class="name">${card[1]}</p><button class="button-more-info">Learn more</button> `
    // div.innerHTML = `<p>${icon[1]}</p>`

    blockWithCards.appendChild(div);
});

const onMenuItemClick = ({ target }) => {
    const allMenuItems = [...document.querySelectorAll('.menu-item-link')];

    allMenuItems.forEach(item => item.classList.remove('active'));

    if (target.classList.contains('menu-item-link')) {
        target.classList.add('active');
    }
};

menuItem.addEventListener('click', onMenuItemClick);
