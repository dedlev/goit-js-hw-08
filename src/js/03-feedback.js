import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state"

const getFormData = JSON.parse(localStorage.getItem(STORAGE_KEY))

const formData = getFormData || {};

Object.keys(formData).forEach((key) => {
    feedbackForm.elements[key].value = formData[key];
})

localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit)

function onFormInput(evt) {

    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY,JSON.stringify(formData))
}

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    feedbackForm.reset();

}

