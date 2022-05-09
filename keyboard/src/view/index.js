import meta from '../meta/buttons.json';
import ru from '../meta/ru.json';

export class Element {
  constructor(elementName = 'div', className = 'container', innerHTML = '') {
    this.element = document.createElement(elementName);
    this.element.className = className;
    this.element.innerHTML = innerHTML;
  }

  addAttribute(attributeName, attributeValue) {
    this.element.setAttribute(attributeName, attributeValue);
  }

  appendTo(parent) {
    if (parent) {
      if (parent.append) {
        parent.append(this.element);
      } else {
        parent.element.append(this.element);
      }
    }
  }
}

export const renderView = () => {
  const root = document.querySelector('body');
  root.classList.add('root');
  root.setAttribute('caps', '');
  const lang = localStorage.getItem('language');

  if (!lang) {
    localStorage.setItem('language', 'en');
  }

  const header = new Element('h1', 'header', 'virtual keyboard');
  header.appendTo(root);

  const title = new Element('h3', 'title', 'for macOS');
  title.appendTo(root);

  const textarea = new Element('textarea', 'textarea');
  textarea.addAttribute('colls', '500');
  textarea.addAttribute('rows', '10');
  textarea.addAttribute('label', '#');
  textarea.addAttribute('placeholder', 'start typing and get pleasure...');
  textarea.addAttribute('autofocus', 'true');

  textarea.appendTo(root);

  const keyboardContainer = new Element('div', 'keyboard-container');
  keyboardContainer.appendTo(root);

  const instruction = new Element('p', 'instruction', 'To change the language, press key РУ/EN or keyboard shortcut Control + Shift');
  instruction.appendTo(root);

  meta.forEach((element) => {
    const rowContainer = new Element('div', 'row-container');
    rowContainer.appendTo(keyboardContainer);
    element.forEach((item) => {
      const text = lang === 'ru' ? ru[item.key] : item.key;
      const key = new Element('button', `button key-${item.key}`, text || item.key);
      key.addAttribute('data-code', item.code);
      key.addAttribute('type', 'button');
      key.appendTo(rowContainer);
    });
  });
};

export const changeLang = () => {
  const lang = localStorage.getItem('language');

  meta.forEach((element) => {
    element.forEach((item) => {
      const key = document.querySelector(`button[data-code="${item.code}"]`);
      if (lang === 'ru') {
        key.innerHTML = item.key;
      } else if (ru[key.innerHTML]) {
        key.innerHTML = ru[key.innerHTML];
      }
    });
  });

  localStorage.setItem('language', lang === 'ru' ? 'en' : 'ru');
};

export const onCapsStateChange = () => {
  const root = document.querySelector('body');
  const active = !root.getAttribute('caps');

  meta.forEach((element) => {
    element.forEach((item) => {
      const key = document.querySelector(`button[data-code="${item.code}"]`);
      if (active) {
        key.innerHTML = item.key.length > 1 ? item.key : item.key.toUpperCase();
      } else {
        key.innerHTML = item.key.length > 1 ? item.key : item.key.toLowerCase();
      }
    });
  });

  root.setAttribute('caps', active ? 'active' : '');
};

const onShiftPressedArrays = [
  ['±', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', null],
  [null, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
  [null, 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', null],
  [null, 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', null, null],
  [null, null, null, null, null, null, null, null, null, null],
];

const onShiftPressedArraysRU = [
  ['Ё', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', null],
  [null, 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|'],
  [null, 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', null],
  [null, 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', null, null],
  [null, null, null, null, null, null, null, null, null, null],
];

export const onShiftPressed = () => {
  const root = document.querySelector('body');
  const active = !root.getAttribute('shift');
  const lang = localStorage.getItem('language');
  const data = lang === 'en' ? onShiftPressedArrays : onShiftPressedArraysRU;

  meta.forEach((element, indexOfRow) => {
    element.forEach((item, index) => {
      const key = document.querySelector(`button[data-code="${item.code}"]`);
      if (active) {
        key.innerHTML = data[indexOfRow][index] || item.key;
      } else if (lang === 'ru') {
        key.innerHTML = ru[item.key] || item.key;
      } else {
        key.innerHTML = item.key;
      }
    });
  });

  root.setAttribute('shift', active ? 'active' : '');
};
