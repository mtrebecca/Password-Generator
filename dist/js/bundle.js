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

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n  const $ = (selector) => document.querySelector(selector);\r\n\r\n  function generatePassword(length, options) {\r\n    const charTypes = {\r\n      lowercase: \"abcdefghijklmnopqrstuvwxyz\",\r\n      uppercase: \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\",\r\n      numbers: \"0123456789\",\r\n      symbols: \"!@#$%^&*()_+[]{}|;:,.<>?\",\r\n    };\r\n\r\n    let charPool = \"\";\r\n    if (options.lowercase) charPool += charTypes.lowercase;\r\n    if (options.uppercase) charPool += charTypes.uppercase;\r\n    if (options.numbers) charPool += charTypes.numbers;\r\n    if (options.symbols) charPool += charTypes.symbols;\r\n\r\n    if (charPool === \"\") charPool = charTypes.lowercase;\r\n\r\n    let password = \"\";\r\n    for (let i = 0; i < length; i++) {\r\n      const randomIndex = Math.floor(Math.random() * charPool.length);\r\n      password += charPool[randomIndex];\r\n    }\r\n\r\n    return password;\r\n  }\r\n\r\n  function updateStrengthText(options) {\r\n    const strengthText = $(\"#strength-text\");\r\n    const strengthBar = $(\"#strength-bar\");\r\n    const strengthFill = $(\"#strength-fill\");\r\n\r\n    if (!strengthText || !strengthBar || !strengthFill) {\r\n      console.error(\"Elementos de força da senha não encontrados.\");\r\n      return;\r\n    }\r\n\r\n    strengthBar.classList.remove(\r\n      \"strength-weak\",\r\n      \"strength-medium\",\r\n      \"strength-strong\"\r\n    );\r\n\r\n    if (\r\n      options.lowercase &&\r\n      options.uppercase &&\r\n      options.numbers &&\r\n      options.symbols\r\n    ) {\r\n      strengthBar.classList.add(\"strength-strong\");\r\n    } else if (\r\n      (options.lowercase || options.uppercase) &&\r\n      (options.numbers || options.symbols)\r\n    ) {\r\n      strengthBar.classList.add(\"strength-medium\");\r\n    } else {\r\n      strengthBar.classList.add(\"strength-weak\");\r\n    }\r\n  }\r\n\r\n  function copyToClipboard(password) {\r\n    navigator.clipboard\r\n      .writeText(password)\r\n      .then(() => {\r\n        showToast(\"Senha copiada para a área de transferência!\");\r\n      })\r\n      .catch((err) => {\r\n        console.error(\"Falha ao copiar senha: \", err);\r\n        showToast(\"Falha ao copiar senha.\");\r\n      });\r\n  }\r\n\r\n  function showToast(message) {\r\n    const toast = document.getElementById(\"toast\");\r\n    toast.textContent = message;\r\n    toast.classList.add(\"show\");\r\n\r\n    setTimeout(() => {\r\n      toast.classList.remove(\"show\");\r\n    }, 3000);\r\n  }\r\n\r\n  $(\"#generate\").addEventListener(\"click\", () => {\r\n    const length = parseInt($(\"#length\").value, 10);\r\n    const options = {\r\n      lowercase: $(\"#lowercase\").checked,\r\n      uppercase: $(\"#uppercase\").checked,\r\n      numbers: $(\"#numbers\").checked,\r\n      symbols: $(\"#symbols\").checked,\r\n    };\r\n\r\n    console.log(\"Gerando senha com opções:\", options);\r\n\r\n    const password = generatePassword(length, options);\r\n    $(\"#password\").value = password;\r\n    updateStrengthText(options);\r\n  });\r\n\r\n  $(\"#copy-left\").addEventListener(\"click\", () => {\r\n    copyToClipboard($(\"#password\").value);\r\n  });\r\n\r\n  $(\"#copy-bottom\").addEventListener(\"click\", () => {\r\n    copyToClipboard($(\"#password\").value);\r\n  });\r\n\r\n  $(\"#length\").addEventListener(\"input\", () => {\r\n    $(\"#length-slider\").value = $(\"#length\").value;\r\n    updateSlider();\r\n  });\r\n\r\n  $(\"#length-slider\").addEventListener(\"input\", () => {\r\n    $(\"#length\").value = $(\"#length-slider\").value;\r\n    updateSlider();\r\n  });\r\n\r\n  const slider = document.getElementById(\"length-slider\");\r\n\r\n  const updateSlider = () => {\r\n    const value =\r\n      ((slider.value - slider.min) / (slider.max - slider.min)) * 100;\r\n    slider.style.setProperty(\"--slider-progress-width\", `${value}%`);\r\n  };\r\n\r\n  updateSlider();\r\n});\r\n\n\n//# sourceURL=webpack://password-generator/./src/js/script.js?");

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