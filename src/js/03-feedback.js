import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const getFormValue = form => ({ email: form.elements.email.value, message: form.elements.message.value });

function onFormSubmit(event) {
  
  event.preventDefault();

  console.log(getFormValue(event.currentTarget));

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function doIt() {

  const form = document.querySelector('.feedback-form');

  if (!form) {
    console.log('Error: invalid markup!');
    return;
  }

  const dataForm = localStorage.getItem(STORAGE_KEY);
  if (dataForm) {
    try {
      const data = JSON.parse(dataForm);
      form.elements.email.value   = data.email;
      form.elements.message.value = data.message;
    } catch (error) {
      console.error(error);
    }
  }

  form.addEventListener('input', throttle(event =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getFormValue(form))), 500));
  
  form.addEventListener('submit', onFormSubmit);
}

doIt();