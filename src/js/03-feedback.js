import throttle from 'lodash.throttle';


const form = document.querySelector(".feedback-form");
const message= document.querySelector(".feedback-form textarea");
const email = document.querySelector(".feedback-form input")
const STORAGE_KEY = "feedback-form-state";

const formData = {};
const getFormValue = form => ({ email: form.elements.email.value, message: form.elements.message.value });

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(getFormValue(event.currentTarget));
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
}
function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
};
dataFromLocalStorage();


