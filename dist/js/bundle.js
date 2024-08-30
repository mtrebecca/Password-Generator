/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("// src/js/script.js\r\n\r\n// Função utilitária para selecionar elementos\r\nconst $ = (selector) => document.querySelector(selector);\r\n\r\n// Gerar uma senha baseada nas opções fornecidas\r\nfunction generatePassword(length, options) {\r\n    const charTypes = {\r\n        lowercase: 'abcdefghijklmnopqrstuvwxyz',\r\n        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',\r\n        numbers: '0123456789',\r\n        symbols: '!@#$%^&*()_+[]{}|;:,.<>?'\r\n    };\r\n    \r\n    let charPool = '';\r\n    if (options.lowercase) charPool += charTypes.lowercase;\r\n    if (options.uppercase) charPool += charTypes.uppercase;\r\n    if (options.numbers) charPool += charTypes.numbers;\r\n    if (options.symbols) charPool += charTypes.symbols;\r\n    \r\n    if (charPool === '') charPool = charTypes.lowercase; // Padrão: letras minúsculas\r\n\r\n    let password = '';\r\n    for (let i = 0; i < length; i++) {\r\n        const randomIndex = Math.floor(Math.random() * charPool.length);\r\n        password += charPool[randomIndex];\r\n    }\r\n\r\n    return password;\r\n}\r\n\r\n// Atualizar a força da senha com base nas opções selecionadas\r\nfunction updateStrengthText(options) {\r\n    const strengthText = $('#strength-text');\r\n    if (options.lowercase && options.uppercase && options.numbers && options.symbols) {\r\n        strengthText.textContent = 'Strong';\r\n    } else if ((options.lowercase || options.uppercase) && (options.numbers || options.symbols)) {\r\n        strengthText.textContent = 'Medium';\r\n    } else {\r\n        strengthText.textContent = 'Weak';\r\n    }\r\n}\r\n\r\n// Copiar a senha para a área de transferência\r\nfunction copyToClipboard(password) {\r\n    navigator.clipboard.writeText(password).then(() => {\r\n        alert('Password copied to clipboard');\r\n    }).catch(err => {\r\n        console.error('Failed to copy password: ', err);\r\n    });\r\n}\r\n\r\n// Eventos\r\n$('#generate').addEventListener('click', () => {\r\n    const length = parseInt($('#length').value, 10);\r\n    const options = {\r\n        lowercase: $('#lowercase').checked,\r\n        uppercase: $('#uppercase').checked,\r\n        numbers: $('#numbers').checked,\r\n        symbols: $('#symbols').checked\r\n    };\r\n\r\n    const password = generatePassword(length, options);\r\n    $('#password').value = password;\r\n    updateStrengthText(options);\r\n});\r\n\r\n$('#copy-left').addEventListener('click', () => {\r\n    copyToClipboard($('#password').value);\r\n});\r\n\r\n$('#copy-bottom').addEventListener('click', () => {\r\n    copyToClipboard($('#password').value);\r\n});\r\n\n\n//# sourceURL=webpack://password-generator/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"]();
/******/ 	
/******/ })()
;