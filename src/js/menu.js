import menuItems from '../templates/menu-items.hbs';
import menu from '../menu.json';

const markup = menuItems(menu);

const menuListRef = document.querySelector('.js-menu');

menuListRef.insertAdjacentHTML('beforeend', markup);