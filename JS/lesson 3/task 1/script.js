/*
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let dog = {name: "Sharik", age: 2, voice: "gav", legs: 4, arms: 0};
let human = {job: true, family: true, hairColor: "brown", arms: 2, legs: 2};
let car = {label: "BMW", type: "sedan", color: "white", doors: 5, engineVolume: 1.80};
let apartment = {floor: 4, roomNumber: 3, heat: true, gas: true, toilet_bath: "combuned"};
let book = {cover: "heavy", sheets: 500, print: "color", pages: "glossy", origin: "Ukraine"};
console.log(dog, human, car, apartment, book);*/

/*// -- Створити масив та вивести його в консоль:
//     - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

let arrayDogs = ["dog1", "dog2", "dog3", "dog4", "dog5"];
console.log(arrayDogs);
let arrayHumans = ["human1", "human2", "human3", "human4", "human5"];
console.log(arrayHumans);
let arrayCars = ["BMW", "Audi", "Lada", "Volkswagen", "Renault"];
console.log(arrayCars);*/

/*// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

let building = {floors: 2, rooms: ["kitchen", "bedroom", "living-room"], furniture: {sleep: "bed", eat: "table", entertainment: "sofa"}, heat: true, electicity: true};
console.log(building);

let driver = {name: "Igor", age : 53, experience: "12 years", categories: ["B", "C"], car: {model: "mitsubisi", year: 5}};
console.log(driver);

let toy = {name: "kubik-rubik", colors: ["blue", "yellow", "orange", "green", "red", "white"], form: "paralelepiped", type: "movement", competition: {sex: "both", age: "non-limit"}};
console.log(toy);

let table = {type: ["fixed", "transparent"], legs: 4, color: "brown", itemsOn: {type: "edible", quantity: 10}, cover: "ink"};
console.log(table);

let bag = {type: "backpack", material: ["textile", "wool"], insideObjects: {quantity: 5, books: 3}, color: "red", safe : "zipper"};
console.log(bag);*/

// Дан массив:
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне

/*    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];

/!*
// - статус Андрія

console.log(users[7].status);*!/

/!*!// - статус Максима

console.log(users[10].status);*!/

/!*!// - ім'я передостаннього об'єкту

console.log(users[9].name);*!/

/!*!// - ім'я третього об'єкта

console.log(users[2].name);*!/

/!*!// - вік Олега

console.log(users[6].age);*!/

/!*!// - вік Олі

console.log(users[3].age);*!/

/!*!// - вік + ім'я 5го об'єкта

console.log(users[4].age, users[4].name);*!/

/!*!// - вік + сатус Анни

console.log(users[5].age, users[5].status);*!/*/

// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
/*// -- змінює колір тексту елемнту з ід main_header на будь-який інший

let headerId = document.getElementById("main_header");
headerId.style.color = "red";*/

/*// -- робить шириниу елементу ul 400 пікселів

let ulSize = document.getElementsByTagName("ul")[0];
ulSize.style.width = "400px";*/

/*// -- робить шириниу всіх елементів з класом linkList шириною 50%

let linkStyle = document.getElementsByClassName("linkList");
for(let i = 0; i < linkStyle.length; i++) {
    linkStyle[i].style.width = "50%";
}*/

/*// -- отримує текст який зберігається в елементі з класом listElement2

let textElement = document.getElementsByClassName("listElement2")[0].textContent;
console.log(textElement);*/

/*// -- отримує всі елементи li та змінює ім колір фону на сірий

let lizhka = document.getElementsByTagName("li");
for(let i = 0; i < lizhka.length; i++) {
    lizhka[i].style.backgroundColor = "grey";
}*/

/*// -- отримує всі елементи 'a' та додає їм клас anchor

let anchors = document.getElementsByTagName("a");
for(let i = 0; i < anchors.length; i++) {
    anchors[i].setAttribute("class", "anchor");
}*/

/*// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let links = document.getElementsByTagName("a");
for(temp of links) {
    if(temp.textContent === "link3") {
        temp.style.fontSize = "40px";
    }
}*/

/*// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let vseA = document.getElementsByTagName("a");
for(let i = 0; i < vseA.length; i++) {
    vseA[i].setAttribute("class", `element_${vseA[i].textContent}`);
}*/

/*// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let getter = document.getElementsByClassName("sub-header");
let color = prompt("Put background color:");
for(let i = 0; i < getter.length; i++) {
    getter[i].style.backgroundColor = `${color}`;
}*/

/*// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let getter = document.getElementsByClassName("sub-header");
let color = prompt("Put text color:");
for(let i = 0; i < getter.length; i++) {
    if(getter[i].textContent = "content 2 segment") {
        getter[i].style.color = `${color}`;
    }
}*/

/*// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let contentText = document.getElementsByClassName("content_1");
let textPrompt = prompt("Input text message");
for(let i = 0; i <contentText.length; i++) {
    contentText[i].innerHTML = `${textPrompt}`;
}*/

/*// -- отримати елементи p та змінити їм paddin на довільне значення

let paddingElements = document.getElementsByTagName('p');
for(let i = 0; i < paddingElements.length; i++) {
    paddingElements[i].style.padding = "20px";
}*/

/*// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

let text2El = document.getElementsByClassName("text2");
for(let i = 0; i < text2El.length; i++) {
    text2El[i].innerHTML = "new Text";
}*/

