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

/***/ "./src/js/passwordUtils.js":
/*!*********************************!*\
  !*** ./src/js/passwordUtils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePassword: () => (/* binding */ generatePassword)\n/* harmony export */ });\nconst CHAR_TYPES = {\r\n  lowercase: \"abcdefghijklmnopqrstuvwxyz\",\r\n  uppercase: \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\",\r\n  numbers: \"0123456789\",\r\n  symbols: \"!@#$%^&*()_+[]{}|;:,.<>?\",\r\n};\r\n\r\nfunction generatePassword(length, options) {\r\n  let charPool = Object.keys(options)\r\n    .filter((type) => options[type])\r\n    .map((type) => CHAR_TYPES[type])\r\n    .join(\"\");\r\n\r\n  if (!charPool) charPool = CHAR_TYPES.lowercase;\r\n\r\n  return Array.from(\r\n    { length },\r\n    () => charPool[Math.floor(Math.random() * charPool.length)]\r\n  ).join(\"\");\r\n}\r\n\n\n//# sourceURL=webpack://password-generator/./src/js/passwordUtils.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _passwordUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passwordUtils */ \"./src/js/passwordUtils.js\");\n/* harmony import */ var _uiUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiUtils.js */ \"./src/js/uiUtils.js\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const $ = (selector) => document.querySelector(selector);\r\n\r\n  $(\"#generate\").addEventListener(\"click\", () => {\r\n    const length = parseInt($(\"#length\").value, 10);\r\n    const options = {\r\n      lowercase: $(\"#lowercase\").checked,\r\n      uppercase: $(\"#uppercase\").checked,\r\n      numbers: $(\"#numbers\").checked,\r\n      symbols: $(\"#symbols\").checked,\r\n    };\r\n\r\n    const password = (0,_passwordUtils__WEBPACK_IMPORTED_MODULE_0__.generatePassword)(length, options);\r\n    $(\"#password\").value = password;\r\n    (0,_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.updateStrengthText)(options);\r\n  });\r\n\r\n  $(\"#copy-left\").addEventListener(\"click\", () => (0,_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard)($(\"#password\").value));\r\n  $(\"#copy-bottom\").addEventListener(\"click\", () => (0,_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard)($(\"#password\").value));\r\n\r\n  $(\"#length\").addEventListener(\"input\", () => {\r\n    $(\"#length-slider\").value = $(\"#length\").value;\r\n    (0,_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.updateSlider)();\r\n  });\r\n\r\n  $(\"#length-slider\").addEventListener(\"input\", () => {\r\n    $(\"#length\").value = $(\"#length-slider\").value;\r\n    (0,_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.updateSlider)();\r\n  });\r\n\r\n  (0,_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.updateSlider)();\r\n});\r\n\n\n//# sourceURL=webpack://password-generator/./src/js/script.js?");

/***/ }),

/***/ "./src/js/uiUtils.js":
/*!***************************!*\
  !*** ./src/js/uiUtils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   copyToClipboard: () => (/* binding */ copyToClipboard),\n/* harmony export */   showToast: () => (/* binding */ showToast),\n/* harmony export */   updateSlider: () => (/* binding */ updateSlider),\n/* harmony export */   updateStrengthText: () => (/* binding */ updateStrengthText)\n/* harmony export */ });\nconst STRENGTH_CLASSES = {\r\n  weak: \"strength-weak\",\r\n  medium: \"strength-medium\",\r\n  strong: \"strength-strong\",\r\n};\r\n\r\nconst TOAST_SHOW_DURATION = 3000;\r\n\r\nfunction updateStrengthText(options) {\r\n  const strengthBar = document.querySelector(\"#strength-bar\");\r\n\r\n  if (!strengthBar) {\r\n    console.error(\"Elemento de força da senha não encontrado.\");\r\n    return;\r\n  }\r\n\r\n  strengthBar.classList.remove(\r\n    STRENGTH_CLASSES.weak,\r\n    STRENGTH_CLASSES.medium,\r\n    STRENGTH_CLASSES.strong\r\n  );\r\n\r\n  if (\r\n    options.lowercase &&\r\n    options.uppercase &&\r\n    options.numbers &&\r\n    options.symbols\r\n  ) {\r\n    strengthBar.classList.add(STRENGTH_CLASSES.strong);\r\n  } else if (\r\n    (options.lowercase || options.uppercase) &&\r\n    (options.numbers || options.symbols)\r\n  ) {\r\n    strengthBar.classList.add(STRENGTH_CLASSES.medium);\r\n  } else {\r\n    strengthBar.classList.add(STRENGTH_CLASSES.weak);\r\n  }\r\n}\r\n\r\nfunction copyToClipboard(text) {\r\n  navigator.clipboard\r\n    .writeText(text)\r\n    .then(() => showToast(\"Senha copiada para a área de transferência!\"))\r\n    .catch(() => showToast(\"Falha ao copiar senha.\"));\r\n}\r\n\r\nfunction showToast(message) {\r\n  const toast = document.querySelector(\"#toast\");\r\n  if (toast) {\r\n    toast.textContent = message;\r\n    toast.classList.add(\"show\");\r\n\r\n    setTimeout(() => toast.classList.remove(\"show\"), TOAST_SHOW_DURATION);\r\n  }\r\n}\r\n\r\nfunction updateSlider() {\r\n  const slider = document.querySelector(\"#length-slider\");\r\n  const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;\r\n  slider.style.setProperty(\"--slider-progress-width\", `${value}%`);\r\n}\r\n\n\n//# sourceURL=webpack://password-generator/./src/js/uiUtils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;