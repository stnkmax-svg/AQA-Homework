let room = "bedroom";
let timeOfDay = 21;
const sensorTemp = null;
const currentTemp = sensorTemp ?? 22;
let isLightOn = (timeOfDay >= 18 || timeOfDay < 6) ? true : false;

switch(room){
    case "bedroom":
        console.log(`Спальня: Свет ${isLightOn ? 'включен' : 'выключен'}`);
        console.log(`Температура: ${currentTemp}`);
        break;
    case "kitchen":
        console.log(`Кухня: Работает вытяжка. Свет ${isLightOn ? 'включен' : 'выключен'}`);
        break;
    default:
        console.log("Неизвестная комната");
};

room === "bedroom" && console.log("Увлажнитель воздуха включен");