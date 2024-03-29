import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit)

const STORAGE_KEY = "feedback-form-state"

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

console.log(formData);

Object.keys(formData).forEach((key) => {
    feedbackForm.elements[key].value = formData[key];
})

function onFormInput(evt) {

    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {} ;
    savedData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData))
};

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset()
    localStorage.removeItem(STORAGE_KEY);
};


