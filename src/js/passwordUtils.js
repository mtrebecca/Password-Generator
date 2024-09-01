const CHAR_TYPES = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+[]{}|;:,.<>?",
};

export function generatePassword(length, options) {
  let charPool = Object.keys(options)
    .filter((type) => options[type])
    .map((type) => CHAR_TYPES[type])
    .join("");

  if (!charPool) charPool = CHAR_TYPES.lowercase;

  return Array.from(
    { length },
    () => charPool[Math.floor(Math.random() * charPool.length)]
  ).join("");
}
