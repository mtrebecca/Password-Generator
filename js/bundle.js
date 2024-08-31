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

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  const $ = (selector) => document.querySelector(selector);\n\n  function generatePassword(length, options) {\n    const charTypes = {\n      lowercase: \"abcdefghijklmnopqrstuvwxyz\",\n      uppercase: \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\",\n      numbers: \"0123456789\",\n      symbols: \"!@#$%^&*()_+[]{}|;:,.<>?\",\n    };\n\n    let charPool = \"\";\n    if (options.lowercase) charPool += charTypes.lowercase;\n    if (options.uppercase) charPool += charTypes.uppercase;\n    if (options.numbers) charPool += charTypes.numbers;\n    if (options.symbols) charPool += charTypes.symbols;\n\n    if (charPool === \"\") charPool = charTypes.lowercase;\n\n    let password = \"\";\n    for (let i = 0; i < length; i++) {\n      const randomIndex = Math.floor(Math.random() * charPool.length);\n      password += charPool[randomIndex];\n    }\n\n    return password;\n  }\n\n  function updateStrengthText(options) {\n    const strengthText = $(\"#strength-text\");\n    const strengthBar = $(\"#strength-bar\");\n    const strengthFill = $(\"#strength-fill\");\n\n    if (!strengthText || !strengthBar || !strengthFill) {\n      console.error(\"Elementos de força da senha não encontrados.\");\n      return;\n    }\n\n    strengthBar.classList.remove(\n      \"strength-weak\",\n      \"strength-medium\",\n      \"strength-strong\"\n    );\n\n    if (\n      options.lowercase &&\n      options.uppercase &&\n      options.numbers &&\n      options.symbols\n    ) {\n      strengthBar.classList.add(\"strength-strong\");\n    } else if (\n      (options.lowercase || options.uppercase) &&\n      (options.numbers || options.symbols)\n    ) {\n      strengthBar.classList.add(\"strength-medium\");\n    } else {\n      strengthBar.classList.add(\"strength-weak\");\n    }\n  }\n\n  function copyToClipboard(password) {\n    navigator.clipboard\n      .writeText(password)\n      .then(() => {\n        showToast(\"Senha copiada para a área de transferência!\");\n      })\n      .catch((err) => {\n        console.error(\"Falha ao copiar senha: \", err);\n        showToast(\"Falha ao copiar senha.\");\n      });\n  }\n\n  function showToast(message) {\n    const toast = document.getElementById(\"toast\");\n    toast.textContent = message;\n    toast.classList.add(\"show\");\n\n    setTimeout(() => {\n      toast.classList.remove(\"show\");\n    }, 3000);\n  }\n\n  $(\"#generate\").addEventListener(\"click\", () => {\n    const length = parseInt($(\"#length\").value, 10);\n    const options = {\n      lowercase: $(\"#lowercase\").checked,\n      uppercase: $(\"#uppercase\").checked,\n      numbers: $(\"#numbers\").checked,\n      symbols: $(\"#symbols\").checked,\n    };\n\n    console.log(\"Gerando senha com opções:\", options);\n\n    const password = generatePassword(length, options);\n    $(\"#password\").value = password;\n    updateStrengthText(options);\n  });\n\n  $(\"#copy-left\").addEventListener(\"click\", () => {\n    copyToClipboard($(\"#password\").value);\n  });\n\n  $(\"#copy-bottom\").addEventListener(\"click\", () => {\n    copyToClipboard($(\"#password\").value);\n  });\n\n  $(\"#length\").addEventListener(\"input\", () => {\n    $(\"#length-slider\").value = $(\"#length\").value;\n    updateSlider();\n  });\n\n  $(\"#length-slider\").addEventListener(\"input\", () => {\n    $(\"#length\").value = $(\"#length-slider\").value;\n    updateSlider();\n  });\n\n  const slider = document.getElementById(\"length-slider\");\n\n  const updateSlider = () => {\n    const value =\n      ((slider.value - slider.min) / (slider.max - slider.min)) * 100;\n    slider.style.setProperty(\"--slider-progress-width\", `${value}%`);\n  };\n\n  updateSlider();\n});\n\n\n//# sourceURL=webpack://password-generator/./src/js/script.js?");

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