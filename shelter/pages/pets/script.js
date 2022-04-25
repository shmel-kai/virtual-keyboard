const blockWithCards = document.querySelector('.block-with-cards');
const menuItem = document.querySelector('.navigation');
const burgerMenuItem = document.querySelector('.burger-navigation');
const burgerIcon = document.querySelector('.burger-image');
const burgerIconOpen = document.querySelector('.burger-image-open');
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.main-overlay');
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
const minWindow = window.matchMedia("(max-width: 767px)");
const mediumWindow = window.matchMedia("(max-width: 1279px) and (min-width: 768px)");
const maxWindow = window.matchMedia("(min-width: 1280px)");
const popupContainer = document.querySelector('.popup-container');
const popupOverlay = document.querySelector('.popup-overlay');
const closeIcon = document.querySelector('.close-icon');
const doubleArrowLeft = document.querySelector('.double-arrow-left');
const singleArrowLeft = document.querySelector('.single-arrow-left');
const singleArrowRight = document.querySelector('.single-arrow-right');
const doubleArrowRight = document.querySelector('.double-arrow-right');
const counter = document.querySelector('.counter');

//const pages = [1,2,3,4,5,6,7,8];
let currentCounter = 1;

const shuffle = (array) => {
    const tempArray = [...array];
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
    }

    return tempArray;
};
const chunk = (arr, size) => Array.from(
    { length: Math.ceil(arr.length / size) }, 
    (_, index) => arr.slice(index * size, index * size + size),
  );

const getShuffledArrays = () => {
    const maxSizeArray = [];
    const maxSizeIndexes = [0, 1, 2, 3, 4, 5, 6, 7];
    for(let i = 0; i < 6; i++) {
        maxSizeArray.push(shuffle(maxSizeIndexes))
    }

    if (maxWindow.matches) return maxSizeArray;
    if (mediumWindow.matches) return chunk(maxSizeArray.flat(), 6);
    if (minWindow.matches) return chunk(maxSizeArray.flat(), 3);
};

const getPagesNumber = () => {
    if (maxWindow.matches) return 6;
    if (mediumWindow.matches) return 8;
    if (minWindow.matches) return 16;
}

let petsArraysPagination = getShuffledArrays();

const onSingleArrowRight = () => {
    if (currentCounter < getPagesNumber()){
        currentCounter += 1;  
        counter.innerHTML = currentCounter;
    } 
    onChangeCounter();
}

const onSingleArrowLeft = () => {
    if (currentCounter > 1){
        currentCounter -= 1;  
        counter.innerHTML = currentCounter;
    } 
    onChangeCounter();
}

const onDoubleArrowRight = () => {
    currentCounter = getPagesNumber();  
    counter.innerHTML = currentCounter;
    onChangeCounter();
}

const onDoubleArrowLeft = () => {
    currentCounter = 1;  
    counter.innerHTML = currentCounter;
    onChangeCounter();
}

const regeneratePetsContent = () => {
    blockWithCards.innerHTML = '';
    pets.forEach((_, index) => {
        const data = pets[petsArraysPagination[currentCounter - 1][index]];
        if(minWindow.matches && index <= 2){
            createPetElement(data);
        } else if (mediumWindow.matches && index <= 5) {
            createPetElement(data);
        } else if (maxWindow.matches) {
            createPetElement(data);
        }
    });
    addListenersToCards();
};

const omMediaQueryReady = () => {
    currentCounter = 1;
    counter.innerHTML = currentCounter;
    petsArraysPagination = getShuffledArrays();
    regeneratePetsContent();
    onChangeCounter(false);
}

const onChangeCounter = (fireOnMediaQueryReady = true) => {
    blockWithCards.style.transition = 'opacity 0.35s';
    blockWithCards.style.opacity = '0';
    if (counter.innerHTML == getPagesNumber()){
        singleArrowRight.classList.add('disabled');
        singleArrowRight.classList.remove('active-hover');
        doubleArrowRight.classList.add('disabled');
        doubleArrowRight.classList.remove('active-hover');
        singleArrowRight.disabled = true;
        doubleArrowRight.disabled = true;
    } else {
        singleArrowRight.classList.remove('disabled');
        singleArrowRight.classList.add('active-hover');
        doubleArrowRight.classList.remove('disabled');
        doubleArrowRight.classList.add('active-hover');
        singleArrowRight.disabled = false;
        doubleArrowRight.disabled = false;
    }
    if (counter.innerHTML == 1){
        singleArrowLeft.classList.add('disabled');
        singleArrowLeft.classList.remove('active-hover');
        doubleArrowLeft.classList.add('disabled');
        doubleArrowLeft.classList.remove('active-hover');
        singleArrowLeft.disabled = true;
        doubleArrowLeft.disabled = true;
    } else {
        singleArrowLeft.classList.remove('disabled');
        singleArrowLeft.classList.add('active-hover');
        doubleArrowLeft.classList.remove('disabled');
        doubleArrowLeft.classList.add('active-hover');
        singleArrowLeft.disabled = false;
        doubleArrowLeft.disabled = false;
    }

    setTimeout(() => {
        if (fireOnMediaQueryReady) {
            regeneratePetsContent();
        }
        blockWithCards.style.opacity = '1';
    }, 350);
}


counter.addEventListener('change', onChangeCounter);
singleArrowRight.addEventListener('click', onSingleArrowRight);
singleArrowLeft.addEventListener('click', onSingleArrowLeft);

doubleArrowLeft.addEventListener('click', onDoubleArrowLeft);
doubleArrowRight.addEventListener('click', onDoubleArrowRight);


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

document.addEventListener('DOMContentLoaded', omMediaQueryReady);
minWindow.addEventListener('change', omMediaQueryReady);
mediumWindow.addEventListener('change', omMediaQueryReady);
maxWindow.addEventListener('change', omMediaQueryReady);


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
}

popupOverlay.addEventListener('click', onClosePopupClick);
closeIcon.addEventListener('click', onClosePopupClick);

const onDOMReady = () => {
    console.log(getShuffledArrays());
    omMediaQueryReady();
    addListenersToCards();
};

document.addEventListener('DOMContentLoaded', onDOMReady);
