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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePassword: () => (/* binding */ generatePassword)\n/* harmony export */ });\nconst CHAR_TYPES = {\n  lowercase: \"abcdefghijklmnopqrstuvwxyz\",\n  uppercase: \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\",\n  numbers: \"0123456789\",\n  symbols: \"!@#$%^&*()_+[]{}|;:,.<>?\",\n};\n\nfunction generatePassword(length, options) {\n  let charPool = Object.keys(options)\n    .filter((type) => options[type])\n    .map((type) => CHAR_TYPES[type])\n    .join(\"\");\n\n  if (!charPool) charPool = CHAR_TYPES.lowercase;\n\n  return Array.from(\n    { length },\n    () => charPool[Math.floor(Math.random() * charPool.length)]\n  ).join(\"\");\n}\n\n\n//# sourceURL=webpack://password-generator/./src/js/passwordUtils.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _passwordUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passwordUtils */ \"./src/js/passwordUtils.js\");\n/* harmony import */ var _uiUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uiUtils.js */ \"./src/js/uiUtils.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const $ = (selector) => document.querySelector(selector);\n\n  $(\"#generate\").addEventListener(\"click\", () => {\n    const length = parseInt($(\"#length\").value, 10);\n    const options = {\n      lowercase: $(\"#lowercase\").checked,\n      uppercase: $(\"#uppercase\").checked,\n      numbers: $(\"#numbers\").checked,\n      symbols: $(\"#symbols\").checked,\n    };\n\n    const password = (0,_passwordUtils__WEBPACK_IMPORTED_MODULE_0__.generatePassword)(length, options);\n    $(\"#password\").value = password;\n    (0,_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.updateStrengthText)(options);\n  });\n\n  $(\"#copy-left\").addEventListener(\"click\", () => (0,_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard)($(\"#password\").value));\n  $(\"#copy-bottom\").addEventListener(\"click\", () => (0,_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.copyToClipboard)($(\"#password\").value));\n\n  $(\"#length\").addEventListener(\"input\", () => {\n    $(\"#length-slider\").value = $(\"#length\").value;\n    (0,_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.updateSlider)();\n  });\n\n  $(\"#length-slider\").addEventListener(\"input\", () => {\n    $(\"#length\").value = $(\"#length-slider\").value;\n    (0,_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.updateSlider)();\n  });\n\n  (0,_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.updateSlider)();\n});\n\n\n//# sourceURL=webpack://password-generator/./src/js/script.js?");

/***/ }),

/***/ "./src/js/uiUtils.js":
/*!***************************!*\
  !*** ./src/js/uiUtils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   copyToClipboard: () => (/* binding */ copyToClipboard),\n/* harmony export */   showToast: () => (/* binding */ showToast),\n/* harmony export */   updateSlider: () => (/* binding */ updateSlider),\n/* harmony export */   updateStrengthText: () => (/* binding */ updateStrengthText)\n/* harmony export */ });\nconst STRENGTH_CLASSES = {\n  weak: \"strength-weak\",\n  medium: \"strength-medium\",\n  strong: \"strength-strong\",\n};\n\nconst TOAST_SHOW_DURATION = 3000;\n\nfunction updateStrengthText(options) {\n  const strengthBar = document.querySelector(\"#strength-bar\");\n\n  if (!strengthBar) {\n    console.error(\"Elemento de força da senha não encontrado.\");\n    return;\n  }\n\n  strengthBar.classList.remove(\n    STRENGTH_CLASSES.weak,\n    STRENGTH_CLASSES.medium,\n    STRENGTH_CLASSES.strong\n  );\n\n  if (\n    options.lowercase &&\n    options.uppercase &&\n    options.numbers &&\n    options.symbols\n  ) {\n    strengthBar.classList.add(STRENGTH_CLASSES.strong);\n  } else if (\n    (options.lowercase || options.uppercase) &&\n    (options.numbers || options.symbols)\n  ) {\n    strengthBar.classList.add(STRENGTH_CLASSES.medium);\n  } else {\n    strengthBar.classList.add(STRENGTH_CLASSES.weak);\n  }\n}\n\nfunction copyToClipboard(text) {\n  navigator.clipboard\n    .writeText(text)\n    .then(() => showToast(\"Senha copiada para a área de transferência!\"))\n    .catch(() => showToast(\"Falha ao copiar senha.\"));\n}\n\nfunction showToast(message) {\n  const toast = document.querySelector(\"#toast\");\n  if (toast) {\n    toast.textContent = message;\n    toast.classList.add(\"show\");\n\n    setTimeout(() => toast.classList.remove(\"show\"), TOAST_SHOW_DURATION);\n  }\n}\n\nfunction updateSlider() {\n  const slider = document.querySelector(\"#length-slider\");\n  const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;\n  slider.style.setProperty(\"--slider-progress-width\", `${value}%`);\n}\n\n\n//# sourceURL=webpack://password-generator/./src/js/uiUtils.js?");

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