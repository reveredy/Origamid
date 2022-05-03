import ScrollSuave from "./modules/scroll-suave.js";

import initScrollAnimation from "./modules/animacao-scroll.js";

import Accordion from "./modules/accordion-list.js";

import TabNav from "./modules/navigation-tab.js";

import initModal from "./modules/modal.js";

import initTooltip from "./modules/tooltip.js";

import initDropdownMenu from "./modules/dropdown-menu.js";

import initMenuMobile from "./modules/menu-mobile.js";

import initFuncionamento from "./modules/funcionamento.js";

import initFetchAnimais from "./modules/fetch-animais.js";

import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] article"
);
tabNav.init();

initScrollAnimation();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
