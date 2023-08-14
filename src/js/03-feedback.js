import throttle from 'lodash.throttle';

const elements = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const KEY = 'feedback-form-state';
const { email, message } = elements.form;
let formData = JSON.parse(localStorage.getItem(KEY)) ?? {};

elements.form.addEventListener('input', throttle(handlerInput, 500));
elements.form.addEventListener('submit', handlerSubmit);

set();

function handlerInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
}

function handlerSubmit(evt) {
  evt.preventDefault();
  if (email.value === '' && message.value === '') {
    return alert('Fill all fields');
  }
  console.log(formData);
  localStorage.removeItem(KEY);
  elements.form.reset();
  formData = {};
}

function set(evt) {
  const message = JSON.parse(localStorage.getItem(KEY));
  if (message) {
    if (message.email) {
      elements.input.value = message.email;
    }
    if (message.message) {
      elements.textarea.value = message.message;
    }
  }
}
