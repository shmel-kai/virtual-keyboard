import { renderView } from './view';
import { addListeners } from './listeners';

import './main.scss';

const onDOMContentLoaded = () => {
  renderView();
  addListeners();
};

window.addEventListener('DOMContentLoaded', onDOMContentLoaded);

console.log(`
SELF-EVALUATION:

- Minimal scope
    - the generation of DOM elements is implemented. body is empty: +20
    - pressing a key on a physical keyboard highlights the key on the virtual keyboard: +10
- Basic scope
    - switching keyboard layouts between English and another language is implemented: +15
    - mouse clicks on buttons of the virtual keyboard or pressing buttons on a physical keyboard inputs characters to the input field: +15
- Extra scope
    - animation of pressing a key is implemented: +15
- Technical requirements
    - usage of ES6+ features (classes, property destructuring, template strings, arrow functions): +15
    - usage of ESLint: +10
    - requirements to the repository, commits and pull request are met: +10
- Penalties
    - there're errors related to the executable code or there're eslint-config-airbnb-base warnings: 0
    
    Total: 110`);
