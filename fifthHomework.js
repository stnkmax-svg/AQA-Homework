//Task 1
const baseElement = {
    click() {
        console.log('Клик по элементу');
    }
};


const loginButton = {
    locator: '#login',
    text: 'Войти'
};

loginButton.__proto__ = baseElement;

loginButton.click();

console.log(loginButton.locator);
console.log(loginButton.text);

//Task 2
const testRunner = {
    testName: 'Login API Test',
    
    run() {
        const self = this;
        setTimeout(function() {
            console.log(`Запускаю тест: ${self.testName}`);
        }, 1000);
    }
};

testRunner.run();

//Task 3
const fwConfig = {
    _timeout: 5000,
    
    set timeout(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('Некорректный таймаут');
        }
        this._timeout = value;
    },
    
    get timeout() {
        return `Текущий таймаут: ${this._timeout} мс`;
    }
};

console.log(fwConfig.timeout);

try {
    fwConfig.timeout = -10;
} catch(e) {
    console.log('Ошибка:', e.message);
}

fwConfig.timeout = 10000;
console.log(fwConfig.timeout);

try {
    fwConfig.timeout = 'не число';
} catch(e) {
    console.log('Ошибка:', e.message);
}

//Task 4
class BasePage {
    static environment = 'QA';
    
    open(url) {
        console.log(`Открываю страницу: ${url} на окружении ${BasePage.environment}`);
    }
}

class LoginPage extends BasePage {
    loginInput = '#user';
    #passwordInput = '#pass';
    
    constructor() {
        super();
    }
    
    fillForm(user, password) {
        console.log(`Вводим логин ${user} в поле ${this.loginInput}`);
        console.log(`Вводим пароль ${password} в поле ${this.#passwordInput}`);
    }
}

const page = new LoginPage();

page.open('https://test.com/login');

page.fillForm('admin', '12345');

//console.log(page.loginInput); Privacy//      
