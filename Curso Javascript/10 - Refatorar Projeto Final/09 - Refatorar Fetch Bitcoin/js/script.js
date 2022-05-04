import Modal from "./modules/modal.js";

import ScrollSuave from "./modules/scroll-suave.js";

import Accordion from "./modules/accordion-list.js";

import TabNav from "./modules/navigation-tab.js";

import Tooltip from "./modules/tooltip.js";

import fetchAnimais from "./modules/fetch-animais.js";

import fetchBitcoin from "./modules/fetch-bitcoin.js";

import initDropdownMenu from "./modules/dropdown-menu.js";

import initMenuMobile from "./modules/menu-mobile.js";

import initFuncionamento from "./modules/funcionamento.js";

import initScrollAnimation from "./modules/animacao-scroll.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] article"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initScrollAnimation();
initDropdownMenu();
initMenuMobile();
initFuncionamento();

fetchAnimais("../../api/quantidadeAnimais.json", ".numeros-grid");

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
