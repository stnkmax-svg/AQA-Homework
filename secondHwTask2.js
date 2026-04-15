let energy = 10;
let depth = 0;
let gold = 0;

while(energy > 0){
    depth++;
    energy--;

    if (depth === 7) {
        console.log(`Глубина: ${depth}м. Энергия: ${energy}. Золото: ${gold}`);
        console.log("Монстр! Гном в панике убегает!");
        break;
    }

    if(depth % 3 === 0){
        gold++;
        console.log(`Глубина: ${depth}м. Энергия: ${energy}. Золото: ${gold}`);
    } else {
        console.log(`Глубина: ${depth}м. Энергия: ${energy}. Золото: ${gold}`);
    }
}
console.log(`Смена окончена. Итоговая глубина: ${depth}, добыто золота: ${gold}`);