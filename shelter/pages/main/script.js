const helpOptions = document.querySelector('.help-options');
const menuItem = document.querySelector('.navigation');
const burgerIcon = document.querySelector('.burger-image');
const burgerIconOpen = document.querySelector('.burger-image-open');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.main-overlay');
const burgerMenuItem = document.querySelector('.burger-navigation');
const blockWithCards = document.querySelector('.block-with-cards');
const popupContainer = document.querySelector('.popup-container');
const popupOverlay = document.querySelector('.popup-overlay');
const closeIcon = document.querySelector('.close-icon');
const sliderLeft = document.querySelector('.slider-left');
const sliderRight = document.querySelector('.slider-right');


const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
];
const iconsOfHelp = [
    ['../../assets/icons/icon-pet-food.png','Pet food'],
    ['../../assets/icons/icon-transportation.png','Transportation'],
    ['../../assets/icons/icon-toys.png','Toys'],
    ['../../assets/icons/icon-bowls-and-cups.png','Bowls and cups'],
    ['../../assets/icons/icon-shampoos.png','Shampoos'],
    ['../../assets/icons/icon-vitamins.png','Vitamins'],
    ['../../assets/icons/icon-medicines.png','Medicines'],
    ['../../assets/icons/icon-collars-leashes.png','Collars / leashes'],
    ['../../assets/icons/icon-sleeping-area.png','Sleeping areas'],
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

    burgerMenu.classList.remove('open');
    overlay.classList.remove('display');
    document.body.style.overflow = 'auto';
    burgerIcon.classList.remove('rotation');

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
        burgerIcon.classList.remove('rotation');
    } else {  
        burgerMenu.classList.add('open');
        overlay.classList.add('display');
        document.body.style.overflow = 'hidden';
        burgerIcon.classList.add('rotation');
    }
};
const onOverlayClick = onBurgerClick;

menuItem.addEventListener('click', onMenuItemClick);

burgerIcon.addEventListener('click', onBurgerClick);
burgerIconOpen.addEventListener('click', onBurgerClick);
overlay.addEventListener('click', onOverlayClick);

//        background: linear-gradient(106deg, rgb(116, 88, 68) 0%, rgb(62, 51, 45) 19%, rgb(33, 32, 31) 76%, rgb(35, 33, 34) 100%);

const minWindow = window.matchMedia("(max-width: 767px)");
const mediumWindow = window.matchMedia("(max-width: 1279px) and (min-width: 768px)");
const maxWindow = window.matchMedia("(min-width: 1280px)");

const generateRandom = (max = 8, array = []) => {
    const random = Math.floor(Math.random() * max);

    if (!array.includes(random)) {
        return random;
    }

    return generateRandom(max, array);
};

const generateThreeRandomNumbers = (max = 8, array = []) => {
    const first = generateRandom(max, array);
    const second = generateRandom(max, [first, ...array]);
    const third = generateRandom(max, [first, second, ...array]);

    return [first, second, third];
};

let midThreePetsIndexes = generateThreeRandomNumbers();
let leftThreePetsIndexes = generateThreeRandomNumbers(8, midThreePetsIndexes);
let rightThreePetsIndexes = generateThreeRandomNumbers(8, midThreePetsIndexes);

const createPetElement = ({ img, name }) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.dataset.name = name;
    const image = document.createElement('img');
    image.src = img;
    image.alt = name;
    const petName = document.createElement('p');
    petName.className = 'name';
    petName.innerHTML = name;
    const button = document.createElement('button');
    button.className = 'button-more-info';
    button.innerHTML = 'Learn more';
    div.appendChild(image);
    div.appendChild(petName);
    div.appendChild(button);

    blockWithCards.appendChild(div);
};

const getTranslateNumber = () => {
    if (minWindow.matches) return 270;

    if (mediumWindow.matches) return 620;

    return 1080;
};

const omMediaQueryReady = () => {
    blockWithCards.innerHTML = '';
    blockWithCards.style.transform = `translate(-${getTranslateNumber()}px, 0)`;
    if(minWindow.matches){
        createPetElement(pets[leftThreePetsIndexes[0]]);
        createPetElement(pets[midThreePetsIndexes[0]]);
        createPetElement(pets[rightThreePetsIndexes[0]]);
    } else if (mediumWindow.matches) {
        createPetElement(pets[leftThreePetsIndexes[0]]);
        createPetElement(pets[leftThreePetsIndexes[1]]);
        createPetElement(pets[midThreePetsIndexes[0]]);
        createPetElement(pets[midThreePetsIndexes[1]]);
        createPetElement(pets[rightThreePetsIndexes[0]]);
        createPetElement(pets[rightThreePetsIndexes[1]]);
    } else if (maxWindow.matches) {
        createPetElement(pets[leftThreePetsIndexes[0]]);
        createPetElement(pets[leftThreePetsIndexes[1]]);
        createPetElement(pets[leftThreePetsIndexes[2]]);
        createPetElement(pets[midThreePetsIndexes[0]]);
        createPetElement(pets[midThreePetsIndexes[1]]);
        createPetElement(pets[midThreePetsIndexes[2]]);
        createPetElement(pets[rightThreePetsIndexes[0]]);
        createPetElement(pets[rightThreePetsIndexes[1]]);
        createPetElement(pets[rightThreePetsIndexes[2]]);
    }
    addListenersToCards();
}


const onLeftSliderClick = () => {
    const translate = getTranslateNumber();
    const newLeft = generateThreeRandomNumbers(8, leftThreePetsIndexes);
    const newRight = generateThreeRandomNumbers(8, leftThreePetsIndexes);
    midThreePetsIndexes = leftThreePetsIndexes;
    leftThreePetsIndexes = newLeft;
    rightThreePetsIndexes = newRight;

    blockWithCards.style.transition = 'transform 0.75s';
    blockWithCards.style.transform = 'translate(0, 0)';
    sliderLeft.disabled = true;
    sliderRight.disabled = true;

    setTimeout(() => {
        blockWithCards.style.transform = `translate(-${translate}px, 0)`;
        blockWithCards.style.transition = 'transform 0s';
        sliderLeft.disabled = false;
        sliderRight.disabled = false;
        omMediaQueryReady();
    }, 750);
};

const onRightSliderClick = () => {
    const translate = getTranslateNumber();
    const newLeft = generateThreeRandomNumbers(8, rightThreePetsIndexes);
    const newRight = generateThreeRandomNumbers(8, rightThreePetsIndexes);
    midThreePetsIndexes = rightThreePetsIndexes;
    leftThreePetsIndexes = newLeft;
    rightThreePetsIndexes = newRight;

    blockWithCards.style.transition = 'transform 0.75s';
    blockWithCards.style.transform = `translate(-${translate*2}px, 0)`;
    sliderLeft.disabled = true;
    sliderRight.disabled = true;

    setTimeout(() => {
        blockWithCards.style.transform = `translate(-${translate}px, 0)`;
        blockWithCards.style.transition = 'transform 0s';
        sliderLeft.disabled = false;
        sliderRight.disabled = false;
        omMediaQueryReady();
    }, 750);
};

const fillPopupData = (data) => {
    const petsImage = document.querySelector('.pets-image');
    const petsName = document.querySelector('.pets-name');
    const typeAndBreed = document.querySelector('.type-breed');
    const description = document.querySelector('.description');
    const age = document.querySelector('.age');
    const inoculations = document.querySelector('.inoculations');
    const diseases = document.querySelector('.diseases');
    const parasites = document.querySelector('.parasites');

    petsImage.src = data.img;
    petsName.innerHTML = data.name;
    typeAndBreed.innerHTML = data.type + ' - ' + data.breed;
    description.innerHTML = data.description;
    age.innerHTML = `<span>Age:</span> ${data.age}`;
    inoculations.innerHTML = `<span>Inoculations: </span> ${data.inoculations}`;
    diseases.innerHTML = `<span>Diseases: </span> ${data.diseases}`;
    parasites.innerHTML = `<span>Parasites: </span> ${data.parasites}`;
}

const addListenersToCards = () => {
    const petCards = [...document.querySelectorAll('.card')];
    
    petCards.forEach((element, index) => {
        element.addEventListener('click', ({ target }) => {
            const container = target.closest('div');
            const name = container.dataset.name;

            const data =  pets.find((element) => element.name === name);
            fillPopupData(data);
            popupContainer.style.display = 'block';
            popupOverlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
};

const onClosePopupClick = () => {
    popupContainer.style.display = 'none';
    popupOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
};

minWindow.addEventListener('change', omMediaQueryReady);
mediumWindow.addEventListener('change', omMediaQueryReady);
maxWindow.addEventListener('change', omMediaQueryReady);
popupOverlay.addEventListener('click', onClosePopupClick);
closeIcon.addEventListener('click', onClosePopupClick);

sliderRight.addEventListener('click', onRightSliderClick);
sliderLeft.addEventListener('click', onLeftSliderClick);


const onDOMReady = () => {
    omMediaQueryReady();
    addListenersToCards();
};

document.addEventListener('DOMContentLoaded', onDOMReady);



