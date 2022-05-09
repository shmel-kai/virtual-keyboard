import { renderView } from './view';
import { addListeners } from './listeners';

import './main.scss';

const onDOMContentLoaded = () => {
  renderView();
  addListeners();
};

window.addEventListener('DOMContentLoaded', onDOMContentLoaded);
