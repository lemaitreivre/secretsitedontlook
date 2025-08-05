// Получаем элементы формы
const form = document.getElementById('form');
const mailInput = form.querySelector('input[name="mail"]');
const nameInput = form.querySelector('input[name="name"]');
const phoneInput = form.querySelector('input[name="phone"]');
const agreementCheckbox = form.querySelector('input[name="agreement"]');

// Функция проверки валидности
function validateForm() {
  // Сбрасываем все стили ошибок
  resetErrorStyles();

  let isValid = true;

  // Валидация email
  if (!validateEmail(mailInput.value)) {
    mailInput.classList.add('_error');
    isValid = false;
  }

  // Валидация имени
  if (!validateName(nameInput.value)) {
    nameInput.classList.add('_error');
    isValid = false;
  }

  // Валидация телефона
  if (!validatePhone(phoneInput.value)) {
    phoneInput.classList.add('_error');
    isValid = false;
  }

  // Валидация согласия
  if (!agreementCheckbox.checked) {
    agreementCheckbox.classList.add('_error');
    isValid = false;
  }

  return isValid;
}

// Функции проверки валидности полей
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateName(name) {
  return /^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(name);
}

function validatePhone(phone) {
  // Вставьте здесь свою логику проверки номера телефона
  return /(?:\+?7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}/.test(phone);
}

// Функция сброса стилей ошибок
function resetErrorStyles() {
  mailInput.classList.remove('_error');
  nameInput.classList.remove('_error');
  phoneInput.classList.remove('_error');
  agreementCheckbox.classList.remove('_error');
}

// Обработчик отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем стандартную отправку формы

  if (validateForm()) {
    // Если валидация успешна, отправляем форму
    form.submit();
  }
});
