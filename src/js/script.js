document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);

  function generatePassword(length, options) {
    const charTypes = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+[]{}|;:,.<>?",
    };

    let charPool = "";
    if (options.lowercase) charPool += charTypes.lowercase;
    if (options.uppercase) charPool += charTypes.uppercase;
    if (options.numbers) charPool += charTypes.numbers;
    if (options.symbols) charPool += charTypes.symbols;

    if (charPool === "") charPool = charTypes.lowercase;

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }

    return password;
  }

  function updateStrengthText(options) {
    const strengthText = $("#strength-text");
    const strengthBar = $("#strength-bar");
    const strengthFill = $("#strength-fill");

    if (!strengthText || !strengthBar || !strengthFill) {
      console.error("Elementos de força da senha não encontrados.");
      return;
    }

    strengthBar.classList.remove(
      "strength-weak",
      "strength-medium",
      "strength-strong"
    );

    if (
      options.lowercase &&
      options.uppercase &&
      options.numbers &&
      options.symbols
    ) {
      strengthBar.classList.add("strength-strong");
    } else if (
      (options.lowercase || options.uppercase) &&
      (options.numbers || options.symbols)
    ) {
      strengthBar.classList.add("strength-medium");
    } else {
      strengthBar.classList.add("strength-weak");
    }
  }

  function copyToClipboard(password) {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        showToast("Senha copiada para a área de transferência!");
      })
      .catch((err) => {
        console.error("Falha ao copiar senha: ", err);
        showToast("Falha ao copiar senha.");
      });
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  $("#generate").addEventListener("click", () => {
    const length = parseInt($("#length").value, 10);
    const options = {
      lowercase: $("#lowercase").checked,
      uppercase: $("#uppercase").checked,
      numbers: $("#numbers").checked,
      symbols: $("#symbols").checked,
    };

    console.log("Gerando senha com opções:", options);

    const password = generatePassword(length, options);
    $("#password").value = password;
    updateStrengthText(options);
  });

  $("#copy-left").addEventListener("click", () => {
    copyToClipboard($("#password").value);
  });

  $("#copy-bottom").addEventListener("click", () => {
    copyToClipboard($("#password").value);
  });

  $("#length").addEventListener("input", () => {
    $("#length-slider").value = $("#length").value;
    updateSlider();
  });

  $("#length-slider").addEventListener("input", () => {
    $("#length").value = $("#length-slider").value;
    updateSlider();
  });

  const slider = document.getElementById("length-slider");

  const updateSlider = () => {
    const value =
      ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.setProperty("--slider-progress-width", `${value}%`);
  };

  updateSlider();
});
