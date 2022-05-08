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
  root.setAttribute('language', 'en');

  const header = new Element('h1', 'header', 'virtual keyboard');
  header.appendTo(root);

  const title = new Element('h3', 'title', 'for macOS');
  title.appendTo(root);

  const textarea = new Element('textarea', 'textarea');
  textarea.addAttribute('colls', '500');
  textarea.addAttribute('rows', '10');
  textarea.addAttribute('label', '#');
  textarea.addAttribute('placeholder', 'start typing and get pleasure...');

  textarea.appendTo(root);

  const keyboardContainer = new Element('div', 'keyboard-container');
  keyboardContainer.appendTo(root);
  console.log('root', root);
  console.log('keyboardContainer', keyboardContainer);

  meta.forEach((element) => {
    const rowContainer = new Element('div', 'row-container');
    rowContainer.appendTo(keyboardContainer);
    element.forEach((item) => {
      const key = new Element('button', `button key-${item.key}`, item.key);
      key.addAttribute('data-code', item.code);
      key.appendTo(rowContainer);
    });
  });
};

export const changeLang = () => {
  const root = document.querySelector('.root');
  const lang = root.getAttribute('language');

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

  root.setAttribute('language', lang === 'ru' ? 'en' : 'ru');
};
