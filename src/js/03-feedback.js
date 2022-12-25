// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// const getFormValue = form => ({ email: form.elements.email.value, message: form.elements.message.value });

// function onFormSubmit(event) {
  
//   event.preventDefault();

//   console.log(getFormValue(event.currentTarget));

//   localStorage.removeItem(STORAGE_KEY);
//   event.currentTarget.reset();
// }

// function doIt() {

//   const form = document.querySelector('.feedback-form');

//   if (!form) {
//     console.log('Error: invalid markup!');
//     return;
//   }

//   const dataForm = localStorage.getItem(STORAGE_KEY);
//   if (dataForm) {
//     try {
//       const data = JSON.parse(dataForm);
//       form.elements.email.value   = data.email;
//       form.elements.message.value = data.message;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   form.addEventListener('input', throttle(event =>
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(getFormValue(form))), 500));
  
//   form.addEventListener('submit', onFormSubmit);
// }

// doIt();

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


// dataFormSave();

// try {
//     lastSession = JSON.parse(localStorage.getItem('feedback-form-state'));
//     if(lastSession!==null){
//         email.value=lastSession.email;
//         message.value=lastSession.message;
//      }
// } catch (err) {
//     console.log('Parse error:' + err.message);
// }