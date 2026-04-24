//Task 1
const testResults = [
    { id: 1, name: 'Login Test', status: 'passed', time: 120 },
    { id: 2, name: 'Payment Test', status: 'failed', time: 300 },
    { id: 3, name: 'Profile Test', status: 'passed', time: 90 },
    { id: 4, name: 'Cart Test', status: 'skipped', time: 10 }
];

const failedTests = testResults.filter(test => test.status === 'failed');
console.log('Failed tests:', failedTests);

const passedTestIds = testResults
    .filter(test => test.status === 'passed')
    .map(test => test.id);
console.log('Passed test IDs:', passedTestIds);

const passedTestIdsShort = testResults
    .filter(({ status }) => status === 'passed')
    .map(({ id }) => id);

const totalExecutionTime = testResults.reduce((sum, test) => sum + test.time, 0);
console.log('Total execution time:', totalExecutionTime); // 520
;
console.log('failedTests:', failedTests);
console.log('passedTestIds:', passedTestIds);
console.log('totalExecutionTime:', totalExecutionTime);

//Task 2
const apiResponse = {
    statusCode: 200,
    data: {
        user: {
            username: "qa_ninja",
            role: "admin",
            contacts: {
                email: "admin@test.com",
                phone: "+123456789"
            }
        }
    }
};

const { data: { user: { username, role, contacts: { email } } } } = apiResponse;

console.log(username, role, email);

//Task 3
const defaultSettings = { headless: true, timeout: 30000, retries: 1 };
const specificTestOverrides = { timeout: 60000, viewport: { width: 1920, height: 1080 } };

const finalConfig = { ...defaultSettings, ...specificTestOverrides };

console.log('Final config:', finalConfig);


//Task 4
const logLocators = (...locators) => {
    console.log(`Готовы к работе: ${locators.length} локаторов. Список: [${locators}]`);
};
logLocators('.btn-login', '#password', '[name="submit"]');