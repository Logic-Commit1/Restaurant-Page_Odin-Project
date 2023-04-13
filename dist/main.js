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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing */ \"./src/landing.js\");\n\r\n\r\n(0,_landing__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nlet myButton = document.querySelector('#menu-button')\r\nlet mainSection = document.querySelector('main')\r\n\r\nlet navButtons = document.querySelectorAll('.nav-buttons')\r\n\r\n\r\nfor (const button of navButtons) {\r\n    button.addEventListener('click',function() {\r\n        let newClassName = button.innerText.toLowerCase().replace(' ','-');\r\n        mainSection.className = newClassName;    \r\n        mainSection.innerHTML = `<div class=\"main-section\" id=\"menu-section\">Menu Section</div>`  \r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\r\n\r\nlet landing = () => {\r\n    (0,_nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    let main = document.createElement('main')\r\n    main.className = 'menu'\r\n    content.append(main)\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (landing);\n\n//# sourceURL=webpack://restaurant-page/./src/landing.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet nav = () => {\r\n\r\n    let nav = document.createElement('nav');\r\n    nav.className = 'nav';\r\n    let li = document.createElement('li');\r\n    let menu = document.createElement('ul');\r\n    menu.id = 'menu-button';\r\n    menu.innerText = 'Menu'\r\n    menu.className = 'nav-buttons'\r\n    let about = document.createElement('ul');\r\n    about.id = 'about-button';\r\n    about.innerText = 'About Us';\r\n    about.className = 'nav-buttons'\r\n    let contact = document.createElement('ul');\r\n    contact.id = 'contact-button';\r\n    contact.innerText = 'Contact Us';\r\n    contact.className = 'nav-buttons'\r\n\r\n    li.appendChild(menu)\r\n    li.appendChild(about)\r\n    li.appendChild(contact)\r\n    nav.appendChild(li)\r\n    content.prepend(nav)\r\n    \r\n\r\n\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);\n\n//# sourceURL=webpack://restaurant-page/./src/nav.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;