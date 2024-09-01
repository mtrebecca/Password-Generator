import { generatePassword } from './passwordUtils';
import { updateStrengthText, copyToClipboard, showToast, updateSlider } from './uiUtils.js';

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);

  $("#generate").addEventListener("click", () => {
    const length = parseInt($("#length").value, 10);
    const options = {
      lowercase: $("#lowercase").checked,
      uppercase: $("#uppercase").checked,
      numbers: $("#numbers").checked,
      symbols: $("#symbols").checked,
    };

    const password = generatePassword(length, options);
    $("#password").value = password;
    updateStrengthText(options);
  });

  $("#copy-left").addEventListener("click", () => copyToClipboard($("#password").value));
  $("#copy-bottom").addEventListener("click", () => copyToClipboard($("#password").value));

  $("#length").addEventListener("input", () => {
    $("#length-slider").value = $("#length").value;
    updateSlider();
  });

  $("#length-slider").addEventListener("input", () => {
    $("#length").value = $("#length-slider").value;
    updateSlider();
  });

  updateSlider();
});
