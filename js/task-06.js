const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputblure)

function onInputblure(event) {
    const inputValueLength = event.currentTarget.value.length;
    const datasetLength = event.currentTarget.dataset.length;

    if (inputValueLength >= datasetLength) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid')
    };
}