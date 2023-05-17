let result = document.getElementById('result');

function clearResult() {
result.value = '';
}

function backspace() {
result.value = result.value.slice(0, -1);
}

function append(value) {
result.value += value;
}

function calculateResult() {
try {
result.value = eval(result.value);
} catch (error) {
result.value = 'Error';
}
}