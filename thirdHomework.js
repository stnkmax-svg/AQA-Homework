// Task 1
function generateEmail(domain) {
  const randomNumber = Math.floor(Math.random() * 100);
  return `test_user_${randomNumber}@${domain}`;
}

const maskPassword = function(password) {
  return '********';
};

const createTestUser = (name, domain) => {
  const email = generateEmail(domain);
  const password = maskPassword('any_password_here');
  return {
    userName: name,
    email: email,
    password: password
  };
};

console.log(createTestUser('QA_Ninja', 'gmail.com'));
console.log(createTestUser('QA_Ninja', 'yandex.ru'));

//Task 2
function createRetryCounter() {
  let attempts = 0;
  
  return function() {
    attempts++;
    return `Попытка запуска: ${attempts}`;
  };
}

const loginRetry = createRetryCounter();
const paymentRetry = createRetryCounter();

console.log(loginRetry());
console.log(loginRetry());
console.log(loginRetry()); 

console.log(paymentRetry());

//Task 3
function waitForElement(elementName, attemptsLeft) {
  if (attemptsLeft === 0) {
    return `Ошибка: Элемент ${elementName} не найден`;
  }
  
  const isFound = Math.random() < 0.2;
  
  if (isFound) {
    return `Успех: Элемент ${elementName} появился!`;
  }
  
  console.log(`Ищем элемент ${elementName}... Осталось попыток: ${attemptsLeft}`);
  return waitForElement(elementName, attemptsLeft - 1);
}

const result = waitForElement('Кнопка оплаты', 5);
console.log(result);