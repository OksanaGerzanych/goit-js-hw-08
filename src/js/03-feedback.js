import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const message= document.querySelector(".feedback-form textarea");
const email = document.querySelector(".feedback-form input")
const STORAGE_KEY = "feedback-form-state";

let formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
localStorage.setItem(STORAGE_KEY, JSON.stringify({ email: email.value, message: message.value }));
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log({ email: email.value, message: message.value });
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
}

try {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (formData !== null) {
    email.value = formData.email;
    message.value = formData.message;
  }
}catch (error) {
  console.log(error);
}


