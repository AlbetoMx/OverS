import {header} from './header.js';
import {main} from './main.js';
import {footer} from './footer.js';
import {Events} from './funciones.js';
import {menuEvent} from './funciones.js';
const body = document.getElementById('body');
header();
main();
footer();
Events();
menuEvent();


