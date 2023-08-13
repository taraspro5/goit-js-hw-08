import throttle from 'lodash.throttle';

const selectors = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const KEY = 'feedback-form-state';
const formStory = {};
set();

console.dir(selectors.form);
selectors.form.addEventListener('input', throttle(handlerInput, 500));
selectors.form.addEventListener('submit', handlerSubmit);

function handlerInput(evt) {
  evt.preventDefault();
  formStory[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY, JSON.stringify(formStory));
}

function set(evt) {
  const message = JSON.parse(localStorage.getItem(KEY));
  if (message) {
    selectors.input.value = message.email;
    selectors.textarea.value = message.message;
  }
}

function handlerSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(KEY);
  selectors.form.reset();
  console.log(formStory);
}
