import {footer} from '../footer.js';
import {header} from '../header.js';
import {main} from './main.js';
//import {fracmentClubs} from './events - copia.js';
import {menuEvent} from '../funciones.js';

const body = document.getElementById('body');
header();
main();
//fracmentClubs();
footer();


menuEvent();