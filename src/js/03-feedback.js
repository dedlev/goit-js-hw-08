import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = "feedback-form-state";

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ||  {} ;

Object.keys(formData).forEach((key) => {
    feedbackForm.elements[key].value = formData[key];
})

function onFormInput(evt) {  
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(evt) {
    console.log(formData);
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);

    formData = {};
};


