/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Animais_ESLint/js/modules/accordion-list.js":
/*!*****************************************************!*\
  !*** ./Animais_ESLint/js/modules/accordion-list.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\n\n  const activeClass = 'ativo';\n  function activeAccordion() {\n    this.classList.toggle('ativo');\n    this.nextElementSibling.classList.toggle(activeClass);\n  }\n\n  if (accordionList.length) {\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n\n    accordionList.forEach((item) => {\n      item.addEventListener('click', activeAccordion);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/modules/accordion-list.js?");

/***/ }),

/***/ "./Animais_ESLint/js/modules/anima-numeros.js":
/*!****************************************************!*\
  !*** ./Animais_ESLint/js/modules/anima-numeros.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]');\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 100);\n      let start = 0;\n\n      const timer = setInterval(() => {\n        start += incremento;\n        numero.innerText = start;\n\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n  let observer;\n\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n\n  observer = new MutationObserver(handleMutation);\n\n  const observerTarget = document.querySelector('.numeros');\n\n  observer.observe(observerTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/modules/anima-numeros.js?");

/***/ }),

/***/ "./Animais_ESLint/js/modules/animacao-scroll.js":
/*!******************************************************!*\
  !*** ./Animais_ESLint/js/modules/animacao-scroll.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollAnimation)\n/* harmony export */ });\nfunction initScrollAnimation() {\n  const sections = document.querySelectorAll(\"[data-anime='scroll']\");\n  const windowMetade = window.innerHeight * 0.6;\n\n  function animaScroll() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const isSectionVisible = (sectionTop - windowMetade) < 0;\n\n      if (isSectionVisible) section.classList.add('ativo');\n      else if (section.classList.contains('ativo')) {\n        section.classList.remove('ativo');\n      }\n    });\n  }\n\n  if (sections.length) {\n    animaScroll();\n\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/modules/animacao-scroll.js?");

/***/ }),

/***/ "./Animais_ESLint/js/modules/dropdown-menu.js":
/*!****************************************************!*\
  !*** ./Animais_ESLint/js/modules/dropdown-menu.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ iniDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./Animais_ESLint/js/modules/outsideClick.js\");\n\n\nfunction iniDropdownMenu() {\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('active');\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  }\n\n  dropdownMenus.forEach((menu) => {\n    ['touchstart', 'click'].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./Animais_ESLint/js/modules/fetch-animais.js":
/*!****************************************************!*\
  !*** ./Animais_ESLint/js/modules/fetch-animais.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./Animais_ESLint/js/modules/anima-numeros.js\");\n\n\nfunction initFetchAnimais() {\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n\n    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.quantidade}</span>`;\n\n    return div;\n  }\n\n  async function fetchAnimais(url) {\n    const animaisResponse = await fetch(url);\n    const animaisJSON = await animaisResponse.json();\n    const divNumeros = document.querySelector('.numeros-grid');\n\n    animaisJSON.forEach((animal) => {\n      const divAnimal = createAnimal(animal);\n      divNumeros.appendChild(divAnimal);\n    });\n    (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n\n  fetchAnimais('./api/quantidadeAnimais.json');\n}\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/modules/fetch-animais.js?");

/***/ }),

/***/ "./Animais_ESLint/js/modules/fetch-bitcoin.js":
/*!****************************************************!*\
  !*** ./Animais_ESLint/js/modules/fetch-bitcoin.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  async function fetchBTC(url) {\n    try {\n      const btcJSON = await (await fetch(url)).json();\n\n      const spanBTC = (document.querySelector('.btc-preco'));\n      spanBTC.innerText = (\n        100 / btcJSON.BRL.buy\n      ).toFixed(5);\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n\n  fetchBTC('https://blockchain.info/ticker');\n}\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./Animais_ESLint/js/modules/funcionamento.js":
/*!****************************************************!*\
  !*** ./Animais_ESLint/js/modules/funcionamento.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\n// new Date()\n\n// O construtor Date cria um objeto contendo valores como mês, dia,\n// horário e mais. A data é baseada no relógio interno do computador.\n\n// const agora = new Date();\n// //console.log(agora); // Semana Mês Dia Ano HH:MM:SS GMT\n\n// agora.getDate() //Dia\n// agora.getDay() //Dia da semana em número (0 - 6) sendo 0 Domingo\n// agora.getMonth() //Número do mês (0 - 11) sendo 0 Janeiro\n// agora.getFullYear() //Ano com 4 dígitos\n// agora.getHours() //Hora\n// agora.getMinutes() //Minutos\n// agora.getTime() //milissegundos desde 1970\n// agora.getUTCHours()-3 //Brasília\n// //ALGUNS EXEMPLOS DO DATE\n\n// // Transformar milissegundos em dias\n// function transformarDias(tempo){\n//     return tempo / (24 * 60 * 60 * 1000);\n//          //tempo em milissegundos\n//          //24(número de horas que tem o dia)\n//          //60(número de minutos que tem a hora)\n//          //60(número de segundos que tem o minuto)\n//          //1000(número de millisegundos que tem o minuto)\n// }\n\n// const future = new Date('Dec 31 2022 23:59');\n// const now = new Date();\n\n// const diasAgora = transformarDias(now);\n// const diasFuture = transformarDias(future);\n\n// console.log(Math.floor(diasFuture - diasAgora))\n\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector('[data-semana]');\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n\n  const dataAgora = new Date();\n  const hoje = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n\n  const semanaAberto = diasSemana.indexOf(hoje) !== -1;\n  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/modules/funcionamento.js?");

/***/ }),

/***/ "./Animais_ESLint/js/modules/menu-mobile.js":
/*!**************************************************!*\
  !*** ./Animais_ESLint/js/modules/menu-mobile.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./Animais_ESLint/js/modules/outsideClick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n  const eventos = ['click', 'touchstart'];\n\n  function openMenu() {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n\n  if (menuButton) {\n    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\n  }\n}\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/modules/menu-mobile.js?");

/***/ }),

/***/ "./Animais_ESLint/js/modules/modal.js":
/*!********************************************!*\
  !*** ./Animais_ESLint/js/modules/modal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const modalContainer = document.querySelector('[data-modal=\"container\"]');\n\n  const menuLogin = document.querySelector('[data-modal=\"abrir\"]');\n\n  const modalFechar = document.querySelector('[data-modal=\"fechar\"]');\n\n  function toggleModal(event) {\n    event.preventDefault();\n    modalContainer.classList.toggle('ativo');\n  }\n\n  function cliqueForaModal(event) {\n    if (event.target === this) toggleModal(event);\n  }\n\n  if (modalContainer && menuLogin && modalFechar) {\n    menuLogin.addEventListener('click', toggleModal);\n    modalFechar.addEventListener('click', toggleModal);\n    modalContainer.addEventListener('click', cliqueForaModal);\n  }\n}\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/modules/modal.js?");

/***/ }),

/***/ "./Animais_ESLint/js/modules/navigation-tab.js":
/*!*****************************************************!*\
  !*** ./Animais_ESLint/js/modules/navigation-tab.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  const tabmenu = document.querySelectorAll(\"[data-tab='menu'] li\");\n  const tabcontent = document.querySelectorAll(\"[data-tab='content'] article\");\n\n  function activeTab(index) {\n    tabcontent.forEach((obj) => {\n      obj.classList.remove('ativo');\n    });\n\n    const direcao = tabcontent[index];\n    console.log(direcao);\n    tabcontent[index].classList.add('ativo', direcao);\n  }\n\n  if (tabmenu.length && tabcontent.length) {\n    tabcontent[0].classList.add('ativo');\n\n    tabmenu.forEach((img, index) => {\n      img.addEventListener('click', () => {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/modules/navigation-tab.js?");

/***/ }),

/***/ "./Animais_ESLint/js/modules/outsideClick.js":
/*!***************************************************!*\
  !*** ./Animais_ESLint/js/modules/outsideClick.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/modules/outsideClick.js?");

/***/ }),

/***/ "./Animais_ESLint/js/modules/scroll-suave.js":
/*!***************************************************!*\
  !*** ./Animais_ESLint/js/modules/scroll-suave.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\nfunction initScrollSuave() {\n  const linksInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n\n  function scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n\n    section.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start',\n    });\n  }\n\n  // Forma alternativa\n  // const topo = section.offsetTop;\n  // window.scrollTo({\n  //   top: topo,\n  //   behavior: \"smooth\"\n  // });\n\n  if (linksInternos.length) {\n    linksInternos.forEach((link) => {\n      link.addEventListener('click', scrollToSection);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/modules/scroll-suave.js?");

/***/ }),

/***/ "./Animais_ESLint/js/modules/tooltip.js":
/*!**********************************************!*\
  !*** ./Animais_ESLint/js/modules/tooltip.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTootip)\n/* harmony export */ });\nfunction initTootip() {\n  const tooltip = document.querySelectorAll('[data-tooltip]');\n\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    },\n  };\n\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    },\n  };\n\n  function criarTooltipBox(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n\n  function onMouseOver() {\n    const tooltipBox = criarTooltipBox(this);\n\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove);\n\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n\n  tooltip.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/modules/tooltip.js?");

/***/ }),

/***/ "./Animais_ESLint/js/script.js":
/*!*************************************!*\
  !*** ./Animais_ESLint/js/script.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./Animais_ESLint/js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animacao-scroll.js */ \"./Animais_ESLint/js/modules/animacao-scroll.js\");\n/* harmony import */ var _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion-list.js */ \"./Animais_ESLint/js/modules/accordion-list.js\");\n/* harmony import */ var _modules_navigation_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/navigation-tab.js */ \"./Animais_ESLint/js/modules/navigation-tab.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./Animais_ESLint/js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./Animais_ESLint/js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./Animais_ESLint/js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./Animais_ESLint/js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./Animais_ESLint/js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./Animais_ESLint/js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./Animais_ESLint/js/modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_navigation_tab_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n\n//# sourceURL=webpack://04---eslint-2/./Animais_ESLint/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Animais_ESLint/js/script.js");
/******/ 	
/******/ })()
;