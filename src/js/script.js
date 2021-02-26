import '../scss/style.scss';

import {colapsibleBlock} from './colapsible.js';
function pageLoad() {
    colapsibleBlock();
}

document.addEventListener("DOMContentLoaded", pageLoad);