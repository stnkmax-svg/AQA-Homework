let userNameExample = " JoHn"; // user name that is imput wrongfully
let userSurnameExample = "ChrySosTOm "; // user surname that is imput wrongfully

function neededFormatName(name){ //function remove spaces, make the word in lower register then return first big letter
    let trimmedAndLower = name.trim().toLowerCase(); 
    return trimmedAndLower.charAt(0).toUpperCase() + trimmedAndLower.slice(1);
}

const userName = neededFormatName(userNameExample); //appropriate user name
const userSurname = neededFormatName(userSurnameExample); //appropriate user surname
let userAge = 33; //user age
let userIsAlive = true; //user status
const userEmail = (`${userName.toLowerCase()}.${userSurname.toLowerCase()}@test.com`); //user email made up of lower register
let currentYear = 2026; //current date(year)
const userBirthDate = currentYear - userAge; //date of birth is calculated by subtraction a year from age
console.log(`Full name: ${userName} ${userSurname}`); //it displays full user name
console.log(`Email: ${userEmail}`); //it displays user email
console.log(`Date of Birth: ${userBirthDate}`); //it displays date of birth
console.log(`Current Status: ${userIsAlive ? 'Alive' : 'Dead'}`); //it displays user status