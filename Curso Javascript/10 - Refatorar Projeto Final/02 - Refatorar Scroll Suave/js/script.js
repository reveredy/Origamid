import ScrollSuave from "./modules/scroll-suave.js";

import initScrollAnimation from "./modules/animacao-scroll.js";

import initAccordionList from "./modules/accordion-list.js";

import initTabNav from "./modules/navigation-tab.js";

import initModal from "./modules/modal.js";

import initTooltip from "./modules/tooltip.js";

import initDropdownMenu from "./modules/dropdown-menu.js";

import initMenuMobile from "./modules/menu-mobile.js";

import initFuncionamento from "./modules/funcionamento.js";

import initFetchAnimais from "./modules/fetch-animais.js";

import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initScrollAnimation();
initAccordionList();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
