// Character sets
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+{}[]<>?,.';

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUpper = document.getElementById('uppercase').checked;
    const includeLower = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    let characterPool = '';
    let password = '';

    if (includeUpper) characterPool += upperCase;
    if (includeLower) characterPool += lowerCase;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;

    // If no character types are selected, show an alert
    if (characterPool === '') {
        alert('Please select at least one character type!');
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    document.getElementById('password').textContent = password;
}

function copyToClipboard() {
    const password = document.getElementById('password').textContent;

    if (password === 'Click "Generate Password"') {
        alert('Please generate a password first!');
        return;
    }

    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('copy').addEventListener('click', copyToClipboard);
