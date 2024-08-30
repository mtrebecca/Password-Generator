const $ = (selector) => document.querySelector(selector);

function generatePassword(length, options) {
    const charTypes = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+[]{}|;:,.<>?'
    };
    
    let charPool = '';
    if (options.lowercase) charPool += charTypes.lowercase;
    if (options.uppercase) charPool += charTypes.uppercase;
    if (options.numbers) charPool += charTypes.numbers;
    if (options.symbols) charPool += charTypes.symbols;
    
    if (charPool === '') charPool = charTypes.lowercase;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    return password;
}

function updateStrengthText(options) {
    const strengthText = $('#strength-text');
    if (options.lowercase && options.uppercase && options.numbers && options.symbols) {
        strengthText.textContent = 'Strong';
    } else if ((options.lowercase || options.uppercase) && (options.numbers || options.symbols)) {
        strengthText.textContent = 'Medium';
    } else {
        strengthText.textContent = 'Weak';
    }
}

function copyToClipboard(password) {
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy password: ', err);
    });
}

$('#generate').addEventListener('click', () => {
    const length = parseInt($('#length').value, 10);
    const options = {
        lowercase: $('#lowercase').checked,
        uppercase: $('#uppercase').checked,
        numbers: $('#numbers').checked,
        symbols: $('#symbols').checked
    };

    const password = generatePassword(length, options);
    $('#password').value = password;
    updateStrengthText(options);
});

$('#copy-left').addEventListener('click', () => {
    copyToClipboard($('#password').value);
});

$('#copy-bottom').addEventListener('click', () => {
    copyToClipboard($('#password').value);
});
