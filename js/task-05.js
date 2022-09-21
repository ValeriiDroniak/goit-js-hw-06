const ref = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output')
};

ref.inputEl.addEventListener('input', onInputChange);
ref.inputEl.addEventListener('blur', onInputblure);

function onInputChange(event) {
    ref.outputEl.textContent = event.currentTarget.value
}

function onInputblure(event) {
    if (!event.currentTarget.value) {
        ref.outputEl.textContent = 'Anonymous';
    }
}