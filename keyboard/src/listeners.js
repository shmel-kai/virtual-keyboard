import { changeLang, onCapsStateChange, onShiftPressed } from './view/index';

let cursorPosition = 0;

const onMouseDown = ({ target }) => {
  if (target.classList.contains('button')) {
    target.classList.add('light');
  }
  if (target.classList.contains('key-Shift')) {
    onShiftPressed();
  }
};

const onMouseUp = ({ target }) => {
  if (target.classList.contains('button')) {
    target.classList.remove('light');
  }
  if (target.classList.contains('key-Shift')) {
    onShiftPressed();
  }
};

const addMouseUpDownListner = () => {
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
};

const onKeyboardContainerClick = ({ target }) => {
  const textarea = document.querySelector('.textarea');
  addMouseUpDownListner();

  if (target.classList.contains('key-CapsLock')) {
    onCapsStateChange();
  } else if (target.classList.contains('key-Tab')) {
    const array = [...textarea.value];
    array.splice(cursorPosition, 0, '    ');
    textarea.value = array.join('');
    cursorPosition += 4;
  } else if (target.classList.contains('key-Enter')) {
    const array = [...textarea.value];
    array.splice(cursorPosition, 0, '\n');
    textarea.value = array.join('');
    cursorPosition = textarea.value.length;
  } else if (target.classList.contains('key-РУ/EN')) {
    changeLang();
  } else if (target.classList.contains('key-Backspace')) {
    const array = [...textarea.value];
    array.splice(cursorPosition - 1, 1);
    textarea.value = array.join('');
    cursorPosition -= 1;
  } else if (target.classList.contains('key-Del')) {
    const array = [...textarea.value];
    array.splice(cursorPosition, 1);
    textarea.value = array.join('');
  } else if (target.classList.contains('button')
    && !target.classList.contains('key-Alt')
    && !target.classList.contains('key-Shift')
    && !target.classList.contains('key-Control')
    && !target.classList.contains('key-Option')
    && !target.classList.contains('key-Cmnd')) {
    const array = [...textarea.value];
    array.splice(cursorPosition, 0, target.innerHTML);
    textarea.value = array.join('');
    cursorPosition += 1;
  }
};

const onKeyboardKeyDown = (event) => {
  event.preventDefault();
  const textarea = document.querySelector('.textarea');

  cursorPosition = textarea.selectionStart;

  const codeOfPressedKey = event.code;
  const pressedButton = document.querySelector(`button[data-code="${codeOfPressedKey}"]`);
  pressedButton.classList.add('light');

  if (event.shiftKey && event.ctrlKey) {
    changeLang();
  }
  if (event.key === 'Tab') {
    const array = [...textarea.value];
    array.splice(cursorPosition, 0, '    ');
    textarea.value = array.join('');
    cursorPosition += 4;
  }
  if (event.key === 'Shift') {
    onShiftPressed();
  }

  if (pressedButton.classList.contains('key-CapsLock')) {
    onCapsStateChange();
  } else if (pressedButton.classList.contains('key-Tab')) {
    const array = [...textarea.value];
    array.splice(cursorPosition, 0, '    ');
    textarea.value = array.join('');
    cursorPosition += 4;
  } else if (pressedButton.classList.contains('key-Enter')) {
    const array = [...textarea.value];
    array.splice(cursorPosition, 0, '\n');
    textarea.value = array.join('');
    cursorPosition = textarea.value.length;
  } else if (pressedButton.classList.contains('key-РУ/EN')) {
    changeLang();
  } else if (pressedButton.classList.contains('key-Backspace')) {
    const array = [...textarea.value];
    array.splice(cursorPosition - 1, 1);
    textarea.value = array.join('');
    cursorPosition -= 1;
  } else if (pressedButton.classList.contains('key-Del')) {
    const array = [...textarea.value];
    array.splice(cursorPosition, 1);
    textarea.value = array.join('');
  } else if (pressedButton.classList.contains('button')
    && !pressedButton.classList.contains('key-Alt')
    && !pressedButton.classList.contains('key-Shift')
    && !pressedButton.classList.contains('key-Control')
    && !pressedButton.classList.contains('key-Option')
    && !pressedButton.classList.contains('key-Cmnd')) {
    const array = [...textarea.value];
    array.splice(cursorPosition, 0, pressedButton.innerHTML);
    textarea.value = array.join('');
    cursorPosition += 1;
  }
};

const onKeyboardKeyUp = (event) => {
  const codeOfPressedKey = event.code;
  const pressedButton = document.querySelector(`button[data-code="${codeOfPressedKey}"]`);
  pressedButton.classList.remove('light');

  if (pressedButton.classList.contains('key-CapsLock')) {
    onCapsStateChange();
  } else if (event.key === 'Shift') {
    onShiftPressed();
  }
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
