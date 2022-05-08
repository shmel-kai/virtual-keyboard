import { changeLang } from './view/index';

let cursorPosition = 0;

const onMouseDown = ({ target }) => {
  if (target.classList.contains('button')) {
    target.classList.add('light');
  }
};

const onMouseUp = ({ target }) => {
  if (target.classList.contains('button')) {
    target.classList.remove('light');
  }
};

const addMouseUpDownListner = () => {
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
};

const onKeyboardContainerClick = ({ target }) => {
  const textarea = document.querySelector('.textarea');
  addMouseUpDownListner();
  if (target.classList.contains('key-РУ/EN')) {
    changeLang();
  } else if (target.classList.contains('key-Backspace')) {
    const array = [...textarea.value];
    array.splice(cursorPosition - 1, 1);
    textarea.value = array.join('');
    cursorPosition -= 1;
  } else if (target.classList.contains('button')) {
    const array = [...textarea.value];
    array.splice(cursorPosition, 0, target.innerHTML);
    textarea.value = array.join('');
    cursorPosition += 1;
  }

  console.log(cursorPosition);
};

const onKeyboardKeyDown = (event) => {
  const textarea = document.querySelector('.textarea');

  cursorPosition = textarea.selectionStart;

  const codeOfPressedKey = event.code;
  const pressedButton = document.querySelector(`button[data-code="${codeOfPressedKey}"]`);
  pressedButton.classList.add('light');
  console.log(event);
};

const onKeyboardKeyUp = (event) => {
  const codeOfPressedKey = event.code;
  const pressedButton = document.querySelector(`button[data-code="${codeOfPressedKey}"]`);
  pressedButton.classList.remove('light');
};

const addKeyClickListener = () => {
  const keyboardContainer = document.querySelector('.keyboard-container');

  keyboardContainer.addEventListener('click', onKeyboardContainerClick);
};

const addKeyDownListener = () => {
  document.addEventListener('keydown', onKeyboardKeyDown);
  document.addEventListener('keyup', onKeyboardKeyUp);
};

const addSelectionListener = () => {
  const textarea = document.querySelector('.textarea');

  document.addEventListener('selectionchange', () => {
    cursorPosition = textarea.selectionStart;
  });
};

export const addListeners = () => {
  addKeyClickListener();
  addKeyDownListener();
  addSelectionListener();
  addMouseUpDownListner();
};
