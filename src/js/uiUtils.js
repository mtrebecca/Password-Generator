const STRENGTH_CLASSES = {
  weak: "strength-weak",
  medium: "strength-medium",
  strong: "strength-strong",
};

const TOAST_SHOW_DURATION = 3000;

export function updateStrengthText(options) {
  const strengthBar = document.querySelector("#strength-bar");

  if (!strengthBar) {
    console.error("Elemento de força da senha não encontrado.");
    return;
  }

  strengthBar.classList.remove(
    STRENGTH_CLASSES.weak,
    STRENGTH_CLASSES.medium,
    STRENGTH_CLASSES.strong
  );

  if (
    options.lowercase &&
    options.uppercase &&
    options.numbers &&
    options.symbols
  ) {
    strengthBar.classList.add(STRENGTH_CLASSES.strong);
  } else if (
    (options.lowercase || options.uppercase) &&
    (options.numbers || options.symbols)
  ) {
    strengthBar.classList.add(STRENGTH_CLASSES.medium);
  } else {
    strengthBar.classList.add(STRENGTH_CLASSES.weak);
  }
}

export function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => showToast("Senha copiada para a área de transferência!"))
    .catch(() => showToast("Falha ao copiar senha."));
}

export function showToast(message) {
  const toast = document.querySelector("#toast");
  if (toast) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), TOAST_SHOW_DURATION);
  }
}

export function updateSlider() {
  const slider = document.querySelector("#length-slider");
  const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty("--slider-progress-width", `${value}%`);
}
