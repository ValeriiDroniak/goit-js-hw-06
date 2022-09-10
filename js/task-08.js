const allData = []; //generaдFormData
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {};
    const copyFormInputs = [...event.currentTarget.elements].slice(0, length - 1);

    !copyFormInputs.some(el => el.value === '') // Перевіряє чи всі поля форми заповнені
        ? formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);

            data[key] = value;
            event.currentTarget.reset();
        })
        : alert('All fields must be filled!');

    // Додаткова перевірка чи не є об'єкт даних пустим, перед додаванням до колекції даних форми
    if (Object.entries(data).length !== 0) {
        allData.push(data);
    }
    console.log(allData);
}